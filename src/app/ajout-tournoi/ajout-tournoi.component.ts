import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Tournoi } from '../tournoi/tournoi';

@Component({
  selector: 'app-ajout-tournoi',
  templateUrl: './ajout-tournoi.component.html',
  styleUrls: ['./ajout-tournoi.component.css']
})
export class AjoutTournoiComponent implements OnInit {
  newTournoi = new Tournoi();
  public id!: string | null;
  request: boolean = false;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  addTournoi(){
    this.id = "/api/evenements/"+this.route.snapshot.paramMap.get('id')
    if (this.id){
      this.newTournoi.ev=this.id
    }
    console.log(this.newTournoi)
    this.data.addTournoi(this.newTournoi).subscribe(
      data => {
        if (data) {
          this.request = true
        }
      }
    );

  }

  ngOnInit(): void {
    
  }

}
