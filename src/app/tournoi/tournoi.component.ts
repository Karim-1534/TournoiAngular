import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Equipe } from '../equipe/equipe';
import { TokenStorageService } from '../_services/token-storage.service';
import { Tournoi } from './tournoi';
@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {
  public id!: string | null;
  public ev!: string | null;
  public tournoi!: Tournoi;
  currentUser: any;
  showGestBoard: boolean = false;

  constructor(private route: ActivatedRoute, private data: DataService, private token: TokenStorageService) { }




  getEquipe(): void {
    this.data.getEquipe().subscribe(
      (equipes: Equipe[]) => {
        equipes.forEach(eq => {
          this.data.getTournoiByURL(eq.trn).subscribe(
            (tn: Tournoi) => {
              if (tn.id == this.tournoi.id) {
                this.tournoi.listEquipes.push(eq)
                console.log(this.tournoi.listEquipes)

              }
            }
          )
        });
      }
    )
  }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.id = this.route.snapshot.paramMap.get('id')
    this.ev = this.route.snapshot.paramMap.get('ev')
    this.data.getTournoiById(this.id).subscribe(
      (data: Tournoi) => {
        this.tournoi = data;
        if (this.currentUser.roles) {
          this.showGestBoard = ((this.currentUser.roles.includes('ROLE_GEST')) && (this.ev == data.ev.substr(-1)))
        }
        this.tournoi.listEquipes = []
        this.getEquipe()

      }
    )

  }

}
