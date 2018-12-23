import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RequestOptions, Headers, Http } from '@angular/http';
//import { AuthHttp  } from 'angular2-jwt'; 

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  //constructor(private http: Http) { }
  constructor(private http: Http) { }

  getOrders(){
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    let option = new RequestOptions({headers: headers});

    return this.http.get('/api/orders', option)
    .pipe(map(response => response.json()));
  }
}
