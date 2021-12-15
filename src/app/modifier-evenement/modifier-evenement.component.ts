import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Evenement } from '../evenements/evenement';
import { Tournoi } from '../tournoi/tournoi';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-modifier-evenement',
  templateUrl: './modifier-evenement.component.html'
})
export class ModifierEvenementComponent implements OnInit {

  public evenements: Evenement[] = [];
  currentUser: any;

  constructor(private data: DataService, private token: TokenStorageService) { }

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

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
    this.getAll();
  }

}
