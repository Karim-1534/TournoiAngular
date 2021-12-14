import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Role } from './role';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser: string | undefined ;
  public isloggedIn: Boolean = false;
  public roles: Role[] | undefined ;
  public users: User[] = [];
  apiURL: string = 'http://localhost:8080/api/users'
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private router: Router, protected http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL, this.requestOptions).pipe(
      map(res =>{
        return res;
      })
    )
  }
  
  logout() {
    this.isloggedIn = false
    this.loggedUser = undefined
    this.roles = undefined
    localStorage.removeItem('loggedUser')
    localStorage.setItem('isloggedIn',String(this.isloggedIn))
    this.router.navigate(['/login'])
  }

  SignIn(user: User): Boolean{
    let validUser: Boolean = false
    this.users.forEach(curUser => {
      if(user.login===curUser.login && user.password===curUser.password){
        validUser = true
        this.loggedUser = curUser.login
        this.isloggedIn = true
        this.roles?.push(curUser.roles)
        localStorage.setItem('loggedUser', this.loggedUser)
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
      
    });
    return validUser;
  }

  /*isAdmin():Boolean{
    if (!this.roles)
      return false;
    return (this.roles.indexOf('ROLE_ADMIN') >-1);
  }*/
}
