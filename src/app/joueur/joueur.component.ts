import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Equipe } from '../equipe/equipe';
import { Joueur } from './joueur';
@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  public id!: string | null;
  public nom!: string | null;
  public eqp!: string | null;
  public joueur!: Joueur;
  public joueurs : Joueur[]=[];
  currentUser: any;

  jr_update = new Joueur();
  constructor(private route: ActivatedRoute, private data: DataService) { }


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
    this.nom = this.route.snapshot.paramMap.get('nom')
    this.eqp = this.route.snapshot.paramMap.get('eqp')
    this.id= this.route.snapshot.paramMap.get('id')
    this.data.getJoueurById(this.id).subscribe(
      (data: Joueur) => {
        this.joueur = data;
      })
  
  }
}
