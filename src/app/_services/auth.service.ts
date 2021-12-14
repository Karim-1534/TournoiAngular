import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8080/api/';
const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
const httpOptions = {
  headers: new HttpHeaders(headerDict)
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { login: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      login: credentials.login,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { login: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'users', {
      login: user.login,
      password: user.password
    }, httpOptions);
  }

  users(): Observable<any> {
    return this.http.get(AUTH_API + 'users', httpOptions );
  }
}

