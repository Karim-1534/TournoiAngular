import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Joueur } from '../joueur/joueur';
import { Equipe } from './equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  id!: string | null;
  public eqp!: string | null;
  public equipe!: Equipe;
  public equipes: Equipe[] = [];
  constructor(private route: ActivatedRoute, private data: DataService) { }

  getJoueur(): void {
    this.data.getEquipe().subscribe(
      (data: Equipe[]) => {
        this.equipes = data
        data.forEach(eqp => {
          eqp.listJoueur = []
          eqp.joueurs.forEach(url => {
            this.data.getJoueurByUrl(url).subscribe(
              (data: Joueur) => {
                console.log(this.id);
                console.log(eqp.id);
                if(this.id == eqp.id.toString())
                  eqp.listJoueur.push(data)
                //console.log(this.equipe)
              }
            )
          })
        })
      });
  }

  supprimerEquipe(e: Equipe){
    let conf = confirm("êtes vous sûr ?")
    if(conf)
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
    this.id = this.route.snapshot.paramMap.get('idEquipe');
    this.eqp = this.route.snapshot.paramMap.get('eqp');
    this.data.getEquipeById(this.id).subscribe(
      (data: Equipe) => {
        this.equipe = data;
      }
    )
    this.getJoueur();
  }
}

