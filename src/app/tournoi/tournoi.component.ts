import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Equipe } from '../equipe/equipe';
import { Tournoi } from './tournoi';
@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {
  public tournois: Tournoi[]= [];
  id!: string | null;
  tournoi!: Tournoi;
  constructor(private route: ActivatedRoute, private data: DataService) { }




  getAll(): void{
    this.data.getTournoi().subscribe(
      (data: Tournoi[]) => {
        this.tournois = data
        data.forEach(trn => {
          trn.listEquipes = []
          trn.equipes.forEach(url => {
            this.data.getEquipeByid(url).subscribe(
              (data: Equipe) => {
                trn.listEquipes.push(data)
              }
            )
          })
        })
      }
    )
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.data.getTournoiById(this.id).subscribe(
      (data: Tournoi) => {
        this.tournoi = data;
      }
    )
  }

}
