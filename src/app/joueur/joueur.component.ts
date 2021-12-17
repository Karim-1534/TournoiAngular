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
  
  

  




  ngOnInit(): void {
    this.nom = this.route.snapshot.paramMap.get('nom')
    this.eqp = this.route.snapshot.paramMap.get('eqp')
    this.id= this.route.snapshot.paramMap.get('id')
    this.data.getJoueurById(this.id).subscribe(
      (data: Joueur) => {
        this.joueur = data;
        console.log(this.joueur);
      })
  
  }
}
