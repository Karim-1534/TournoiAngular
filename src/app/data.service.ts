import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Evenement } from './evenements/evenement';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlAPi = 'http://127.0.0.1:8080/api';
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor(protected http: HttpClient) { }

  getEvenements(): Observable<Evenement[]>{
    return this.http.get<Evenement[]>(this.urlAPi+'/evenements', this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }

  addEvenement(ev: Evenement): Observable<Evenement>{
    return this.http.post<Evenement>(this.urlAPi+'/evenements',ev,this.requestOptions);
  }
}
