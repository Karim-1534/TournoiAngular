import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Equipe } from './equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  id!: string | null;
  equipe!: Equipe;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.data.getEquipeByid(this.id).subscribe(
      (data: Equipe)=> {
        this.equipe = data;
      }
    )
  }

}
