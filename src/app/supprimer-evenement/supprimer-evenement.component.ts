import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Evenement } from '../evenements/evenement';
import { Tournoi } from '../tournoi/tournoi';

@Component({
  selector: 'app-supprimer-evenement',
  templateUrl: './supprimer-evenement.component.html'
})
export class SupprimerEvenementComponent implements OnInit {

  public evenements: Evenement[] = [];
  status!: string;
  errorMessage: any;

  constructor(private data: DataService) { }

  getAll(): void {
    this.data.getEvenements().subscribe(
      (data: Evenement[]) => {
        this.evenements = data
        data.forEach(ev => {
          ev.listTournois = []
          ev.tournois.forEach(url => {
            this.data.getTournoiByURL(url).subscribe(
              (data: Tournoi) => {
                ev.listTournois.push(data)
              }
            )
          });
        });
      }
    )
  }

  supprimerEvenement(ev: Evenement) {
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.data.deleteEvenement(ev.id).subscribe(
        data => {
          this.reloadPage();
        });
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getAll();
  }

}
