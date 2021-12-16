import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Evenement } from './evenements/evenement';
import { Tournoi } from './tournoi/tournoi';
import { Equipe } from './equipe/equipe';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlAPi = 'http://127.0.0.1:8080';
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  headerFetch = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/merge-patch+json',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  requestFetch= {
    headers: new HttpHeaders(this.headerFetch),
  };
  constructor(protected http: HttpClient) { }

  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.urlAPi + '/api/evenements', this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }

  addEvenement(ev: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.urlAPi + '/api/evenements', ev, this.requestOptions);
  }

  updateEvenement(ev: Evenement): Observable<Evenement> {
    return this.http.patch<Evenement>(this.urlAPi + '/api/evenements/'+ev.id, ev, this.requestFetch);
  }

  getTournoiByURL(id: string): Observable<Tournoi> {
    return this.http.get<Tournoi>(this.urlAPi + id, this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }

  getTournoi(): Observable<Tournoi[]> {
    return this.http.get<Tournoi[]>(this.urlAPi + '/api/tournois', this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }

  getTournoiById(id: any): Observable<Tournoi> {
    return this.http.get<Tournoi>(this.urlAPi + '/api/tournois/' + id, this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }

  addTournoi(tr: Tournoi): Observable<Tournoi> {
    return this.http.post<Tournoi>(this.urlAPi + '/api/tournois', tr, this.requestOptions);
  }

  deleteTournoi(id: number): Observable<Tournoi> {
    return this.http.delete<Tournoi>(this.urlAPi + '/api/tournois/' + id);
  }

  getEquipe(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.urlAPi + '/api/equipes', this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }

  getUsersByUrl(id: string): Observable<User>{
    return this.http.get<User>(this.urlAPi+ id, this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }


}
