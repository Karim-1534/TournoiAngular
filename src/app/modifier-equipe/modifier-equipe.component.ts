import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Equipe } from '../equipe/equipe';

@Component({
  selector: 'app-modifier-equipe',
  templateUrl: './modifier-equipe.component.html',
  styleUrls: ['./modifier-equipe.component.css']
})
export class ModifierEquipeComponent implements OnInit {
  public id!: string | null;
  public equipe!: Equipe;
  eq_update = new Equipe();

  constructor(private route: ActivatedRoute, private data: DataService) {}
  getEquipe(){

  }

  updateEquipe(id: number){
    this.eq_update .id =id;
    this.data.updateEquipe(this.eq_update).subscribe(
      data => {
        this.reloadPage();
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('idEquipe')
    this.data.getEquipeById(this.id).subscribe(
      (data: Equipe) =>{
        this.equipe = data;
      }
    )
  }
  

}
