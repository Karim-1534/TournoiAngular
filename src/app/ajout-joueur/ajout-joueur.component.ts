import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Joueur } from '../joueur/joueur';

@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css']
})
export class AjoutJoueurComponent implements OnInit {
  newJoueur = new Joueur();
  public id!: string | null;
  request: boolean = false;


  constructor(private route: ActivatedRoute, private data: DataService) { }

  addJoueur(){
    this.id = "/api/equipes/"+this.route.snapshot.paramMap.get('idEquipe')
    if (this.id){
      this.newJoueur.eqp = this.id
    }
    console.log(this.newJoueur)
    this.data.addJoueur(this.newJoueur).subscribe(
      data => {
        console.log(this.data)
        if (data){
          this.request = true
          this.reloadPage();
        }
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
