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
  public id!: string | null;
  public tournoi!: Tournoi;
  constructor(private route: ActivatedRoute, private data: DataService) { }




  getEquipe(): void {
    this.data.getEquipe().subscribe(
      (equipes: Equipe[]) => {
        equipes.forEach(eq => {
          this.data.getTournoiByURL(eq.trn).subscribe(
            (tn: Tournoi) => {
              if(tn.id==this.tournoi.id){
                this.tournoi.listEquipes.push(eq)
              }
            }
          )
        });
      }
    )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.data.getTournoiById(this.id).subscribe(
      (data: Tournoi) => {
        this.tournoi = data;
        this.tournoi.listEquipes = []
        this.getEquipe()
      }
    )
    
  }

}
