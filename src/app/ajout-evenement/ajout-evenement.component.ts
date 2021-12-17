import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Evenement } from '../evenements/evenement';

@Component({
  selector: 'app-ajout-evenement',
  templateUrl: './ajout-evenement.component.html'
})
export class AjoutEvenementComponent implements OnInit {
  newEvenement = new Evenement();
  request: boolean = false;


  constructor(private data: DataService) { }

  addEvenement() {
    this.data.addEvenement(this.newEvenement).subscribe(
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
