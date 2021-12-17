import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Evenement } from './evenements/evenement';
import { Tournoi } from './tournoi/tournoi';
import { Equipe } from './equipe/equipe';
import { User } from './user';
import { Joueur } from './joueur/joueur';
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

  deleteEvenement(id: number): Observable<Evenement> {
    return this.http.delete<Evenement>(this.urlAPi + '/api/evenements/' + id);
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

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlAPi + '/api/users', this.requestOptions).pipe(
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

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.urlAPi + '/api/users/' + id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(this.urlAPi + '/api/users/'+user.id, user, this.requestFetch);
  }


  getEquipe(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.urlAPi + '/api/equipes', this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }
  addEquipe(eq: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.urlAPi + '/api/equipes', eq, this.requestOptions);
  }


  getEquipeById(id: any): Observable<Equipe> {
    return this.http.get<Equipe>(this.urlAPi + '/api/equipes/' + id, this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }
  getEquipeByUrl(id: string): Observable<Equipe>{
    return this.http.get<Equipe>(this.urlAPi+ id, this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }


  getJoueur(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.urlAPi + '/api/joueurs', this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }

  addJoueur(jr: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.urlAPi + '/api/joueurs', jr, this.requestOptions);
  }
  


  getJoueurById(id: any): Observable<Joueur> {
    return this.http.get<Joueur>(this.urlAPi + '/api/joueurs/' + id, this.requestOptions).pipe(
      map(res => {
        return res;
      })
    )
  }
  getJoueurByUrl(id: string): Observable<Joueur>{
    return this.http.get<Joueur>(this.urlAPi+ id, this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }
  updateJoueur(jr: Joueur): Observable<Joueur> {
    return this.http.patch<Joueur>(this.urlAPi + '/api/joueurs/'+jr.id, jr, this.requestFetch);
  }

  deleteJoueur(id: number): Observable<Joueur> {
    return this.http.delete<Joueur>(this.urlAPi + '/api/joueurs/' + id);
  }




}
