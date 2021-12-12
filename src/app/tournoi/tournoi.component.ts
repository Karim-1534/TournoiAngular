import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service';
import { Tournoi } from './tournoi';
@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {
  id!: string | null;
  tournoi!: Tournoi;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.data.getTournoiById(this.id).subscribe(
      (data: Tournoi) => {
        this.tournoi = data;
      }
    )
  }

}
