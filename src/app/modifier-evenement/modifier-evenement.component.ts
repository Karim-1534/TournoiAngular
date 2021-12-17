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
  delete: boolean = false;

  constructor(private data: DataService, private token: TokenStorageService) { }

  ev_update = new Evenement();

  getEv(): void {
    this.data.getEvenements().subscribe(
      (data: Evenement[]) => {
        data.forEach(ev => {
          this.data.getUsersByUrl(ev.user).subscribe(
            (user: User) => {
              if (user.login == this.currentUser["username"]) {
                this.ev = ev
              }
            }
          )
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

  supprimerTournoi(t: Tournoi) {
    let conf = confirm("Etes-vous sûr?");
    if (conf)
      this.data.deleteTournoi(t.id).subscribe(
        data => {
          console.log(data)
          this.reloadPage();

        })
  }

  updateEvenement(id: number) {
    this.ev_update.id = id;
    console.log(this.ev_update)
    this.data.updateEvenement(this.ev_update).subscribe(
      data => {
        console.log(data);

        this.reloadPage();
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getEv();
  }

}
