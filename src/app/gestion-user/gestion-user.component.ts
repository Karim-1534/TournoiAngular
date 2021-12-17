import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Evenement } from '../evenements/evenement';
import { User } from '../user';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUSerComponent implements OnInit {

  public users: User[] = [];
  public evenements: Evenement[] = [];
  user_update = new User();
  update!: string;
  ev_update = new Evenement();

  constructor(private data: DataService) { }

  getUsersfromBD(): void {
    this.data.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.getUserEv();

      }
    )
  }

  getUserEv(): void {
    this.data.getEvenements().subscribe(
      (data: Evenement[]) => {
        this.evenements = data;
        this.evenements.forEach(ev => {
          this.users.forEach(user => {
            if (ev.user != undefined) {
              this.data.getUsersByUrl(ev.user).subscribe(
                (data: User) => {
                  if (user.id == data.id) {
                    user.ev = ev;
                  }
                })
            }

          })

        });
      });
  }


  getUsers(): User[] {
    return this.users;
  }

  getEvenements(): Evenement[] {
    return this.evenements;
  }

  supprimerUser(user: User) {
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.data.deleteUser(user.id).subscribe(
        data => {
          this.reloadPage();
        });
    } console.log(user)
  }

  updateUser(id: number) {
    this.user_update.id = id;
    console.log(this.user_update)
    this.data.updateUser(this.user_update).subscribe(
      data => {
        console.log(data);

        this.reloadPage();
      }
    );
  }

  attrEV() {
    this.ev_update = JSON.parse(this.update)
    console.log(this.ev_update)
    this.data.updateEvenement(this.ev_update).subscribe(
      data => {
        this.reloadPage;
        console.log(data)
      });
    
  }

  supprimerEv(user: User) {
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.ev_update.id = user.ev.id;
      this.ev_update.nom = user.ev.nom;
      this.ev_update.date = user.ev.date;
      this.ev_update.lieu = user.ev.lieu;
      this.ev_update.tournois = user.ev.tournois;
      console.log(this.ev_update)
      this.data.putEvenement(this.ev_update).subscribe(
        data => {
              console.log(data);
              this.reloadPage;
        }
      );
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getUsersfromBD();
  }

}
