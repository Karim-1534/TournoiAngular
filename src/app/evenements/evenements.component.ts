import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tournoi } from '../tournoi/tournoi';
import { Evenement } from './evenement';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
})
export class EvenementsComponent implements OnInit {

  public evenements: Evenement[] = [];

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

  getEvenements(): Evenement[]{
    return this.evenements;
  }

  ngOnInit(): void {
    this.getAll();
  }

}
