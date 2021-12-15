import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe/equipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {

//  newEquipe = new Equipe();
  constructor(private data: DataService) { }
 /* addEquipe (){
    this.data.addEquipe(this.newEquipe).subscribe(
      data => {
        console.log(data);
      }
    )
  }*/

  ngOnInit(): void {
  }

}
