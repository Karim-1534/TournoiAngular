import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Evenement } from '../evenements/evenement';
import { Tournoi } from '../tournoi/tournoi';
import { User } from '../user';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-modifier-evenement',
  templateUrl: './modifier-evenement.component.html'
})
export class ModifierEvenementComponent implements OnInit {

  public ev!: Evenement;
  currentUser: any;

  constructor(private data: DataService, private token: TokenStorageService) { }

  ev_update = new Evenement();

  getEv(): void {
    this.data.getEvenements().subscribe(
      (data: Evenement[]) => {
        data.forEach(ev => {
          this.data.getUsersByUrl(ev.user).subscribe(
            (user: User) => {
              if(user.login==this.currentUser["username"]){
                this.ev=ev
              }
            }
          )
          ev.listTournois = []
          ev.tournois.forEach(url => {
            this.data.getTournoiByUrl(url).subscribe(
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
    this.getEv();
  }

}
