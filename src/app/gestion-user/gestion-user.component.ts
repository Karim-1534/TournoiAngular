import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUSerComponent implements OnInit {

  public users: User[] = [];
  user_update = new User();

  constructor(private data: DataService) { }

  getUsersfromBD(): void {
    this.data.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      }
    )
  }

  getUsers(): User[] {
    return this.users;
  }

  supprimerUser(user:User){
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.data.deleteUser(user.id).subscribe(
        data => {
          this.reloadPage();
        });
    }console.log(user)
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

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getUsersfromBD();
  }

}
