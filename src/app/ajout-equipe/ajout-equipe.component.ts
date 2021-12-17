import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe/equipe';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {

  newEquipe = new Equipe();
  public id!: string | null;

  constructor(private route: ActivatedRoute, private data: DataService) { }
  addEquipe (){
    this.id = "/api/tournois/"+this.route.snapshot.paramMap.get('idTournoi')
    console.log(this.id)
    if (this.id){
      this.newEquipe.trn = this.id
    }
    this.data.addEquipe(this.newEquipe).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
