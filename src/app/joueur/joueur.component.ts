import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Equipe } from '../equipe/equipe';
import { Evenement } from '../evenements/evenement';
import { User } from '../user';
import { TokenStorageService } from '../_services/token-storage.service';
import { Joueur } from './joueur';
@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  private roles: string[] = [];
  showAdminBoard = false;
  showGestBoard = false;
  login: string | undefined;
  isLoggedIn = false;
  idEv!: string | null;
  public id!: string | null;
  public nom!: string | null;
  public eqp!: string | null;
  public joueur!: Joueur;
  public joueurs : Joueur[]=[];
  currentUser: any;
  checkUser = false

  jr_update = new Joueur();
  
  constructor(private route: ActivatedRoute, private data: DataService, private tokenStorageService: TokenStorageService) { }


  updateJoueur(id: number){
    
    this.jr_update.id =id;
    this.data.updateJoueur(this.jr_update).subscribe(
      data => {
        this.reloadPage();
      }
    )
  }


  supprimerJoueur(j: Joueur){
    let conf = confirm("êtes vous sûr ?")
    if(conf)
      this.data.deleteJoueur(j.id).subscribe(
        data => {
          this.reloadPage();
        }
      )
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.getUserOk();
    this.nom = this.route.snapshot.paramMap.get('nom')
    this.eqp = this.route.snapshot.paramMap.get('eqp')
    this.id= this.route.snapshot.paramMap.get('id')
    this.data.getJoueurById(this.id).subscribe(
      (data: Joueur) => {
        this.joueur = data;
      });

     

      this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showGestBoard = this.roles.includes('ROLE_GEST');

      this.login = user.username;
    }
  }

  getUserOk(): boolean {
    this.idEv = this.route.snapshot.paramMap.get(':id')
    this.data.getEvenementById(this.idEv).subscribe(
      (data: Evenement) => {
              this.data.getUsersByUrl(data.user).subscribe(
                (user: User)=>{
                  if (user.login == this.currentUser["username"]) {
                    this.checkUser = true
                    console.log(this.checkUser)
                  }
                })
              } )
            return this.checkUser;
        }

  
  }

