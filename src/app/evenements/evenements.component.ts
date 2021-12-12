import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Evenement } from './evenement';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
})
export class EvenementsComponent implements OnInit {

  public evenements: Evenement[] = [];

  constructor(private data: DataService) { }

  getAll() :void{
    this.data.getEvenements().subscribe(
      (data: Evenement[]) => {
        this.evenements = Object.values(data)
        console.log(data)
      }
    )
  }

  ngOnInit(): void {
    this.getAll();
    
  }

}
