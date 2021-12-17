import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Joueur } from '../joueur/joueur';
import { TokenStorageService } from '../_services/token-storage.service';
import { Equipe } from './equipe';
import { User } from '../user';
import { Evenement } from '../evenements/evenement';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  private roles: string[] = [];
  showAdminBoard = false;
  showGestBoard = false;
  login: string | undefined;
  isLoggedIn = false;

  id!: string | null;
  public eqp!: string | null;
  public equipe!: Equipe;
  public equipes: Equipe[] = [];
  idEv!: string | null;
  public eq!: Equipe;


  currentUser: any;
  checkUser = false

  constructor(private route: ActivatedRoute, private data: DataService, private tokenStorageService: TokenStorageService) { }

  getJoueur(): void {
    this.data.getEquipe().subscribe(
      (data: Equipe[]) => {
        this.equipes = data
        data.forEach(eqp => {
          eqp.listJoueur = []
          eqp.joueurs.forEach(url => {
            this.data.getJoueurByUrl(url).subscribe(
              (data: Joueur) => {
                if (this.id == eqp.id.toString())
                  eqp.listJoueur.push(data)
              }
            )
          })
        })
      });
  }

  supprimerEquipe(e: Equipe) {
    let conf = confirm("êtes vous sûr ?")
    if (conf)
      this.data.deleteEquipe(e.id).subscribe(
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
    this.currentUser = this.tokenStorageService.getUser();
    
    this.id = this.route.snapshot.paramMap.get('idEquipe');
    this.eqp = this.route.snapshot.paramMap.get('eqp');
    this.data.getEquipeById(this.id).subscribe(
      (data: Equipe) => {
        this.equipe = data;
      }
    )
    this.getJoueur();
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
    this.idEv = this.route.snapshot.paramMap.get('idEvenement')
    this.data.getEvenementById(this.idEv).subscribe(
      (data: Evenement) => {
              this.data.getUsersByUrl(data.user).subscribe(
                (user: User)=>{
                  if (user.login == this.currentUser["username"]) {
                    this.checkUser = true
                  }
                })
              } )
            return this.checkUser;
        }



}


