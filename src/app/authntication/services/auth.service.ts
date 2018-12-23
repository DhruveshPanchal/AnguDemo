import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map, catchError } from 'rxjs/operators';
//import {JwtHelper, tokenNotExpired} from 'angular2-jwt'
 import { JwtHelperService  } from '@auth0/angular-jwt' 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(map(response => {
         console.log(response.json());
         let result = response.json();
         if(result && result.token){
           localStorage.setItem('token', result.token);
           return true;
         }
         return false;
      }));
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 

    
  //  return tokenNotExpired();
    let jwtHelper = new JwtHelperService();
    //return jwtHelper.isTokenExpired();


    let token = localStorage.getItem('token');
    console.log("Auth:" + token);
    let isExpired = jwtHelper.isTokenExpired(token);

    //temp code;
    return token;

    if(!token) return false;
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    
    console.log("Expiration: " + expirationDate + ", isExpired: " + isExpired);
    return !isExpired;

    // let jwtHelper= new JwtHelper();
    
    
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return false;

    return new JwtHelperService().decodeToken(token);
  }
}
