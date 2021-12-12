import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Evenement } from './evenements/evenement';
import { Tournoi } from './tournoi/tournoi';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlAPi = 'http://127.0.0.1:8080';
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor(protected http: HttpClient) { }

  getEvenements(): Observable<Evenement[]>{
    return this.http.get<Evenement[]>(this.urlAPi+'/api/evenements', this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }

  addEvenement(ev: Evenement): Observable<Evenement>{
    return this.http.post<Evenement>(this.urlAPi+'/api/evenements',ev,this.requestOptions);
  }

  getTournoiByURL(id: string): Observable<Tournoi>{
    return this.http.get<Tournoi>(this.urlAPi+id, this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }

  getTournoiById(id: any): Observable<Tournoi>{
    return this.http.get<Tournoi>(this.urlAPi+'/api/tournois/'+id, this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }

}
