import { Injectable } from '@angular/core';
import { Evenement } from './evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  public evenements: Evenement[];

  constructor() { 
    this.evenements = []
  }

  listeEvenements():Evenement[]{
    return this.evenements;
  }

  addEvenement(ev: Evenement){
    this.evenements.push(ev);
  }
}
