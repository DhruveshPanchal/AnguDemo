import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/observable/throw';
//import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

// Reusable data service
export class DataService {
 
  constructor(private url:string, private http: Http) {
    
   }


   promiseExample(){
    return this.http.get(this.url)
    .pipe(map(response => response.json()))
    .toPromise();
   }

   getAll(){
    // let str = [{"userId": 1, "id": 1, "title": "…istinctio eum\naccusamus ratione error aut" }];
    // return str;
     return this.http.get(this.url)
        .pipe(map((e) => e.json()),
            catchError(this.handleError));
        
   }

  create(resource){
     return this.http.post(this.url, JSON.stringify(resource))
        .pipe(map(response => response.json()),
            catchError(this.handleError));
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
        .pipe(map(response => response.json()),
            catchError(this.handleError));
  }

  delete(id){
    return  this.http.delete(this.url + '/' + id)
        .pipe(map(response => response.json()),
            catchError(this.handleError));
  }

  private handleError(error:Response){
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json())) ;
    
    else if(error.status === 400)
          return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }

  //---------------------------  Old Code ----------------------------

  deletePost_Old(id){
    return  this.http.delete(this.url + '/' + id)
     .pipe(catchError((error: Response) => {
        if(error.status === 400)
          return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
    }));
  }

  createPost_Old(post){
    return this.http.post(this.url, JSON.stringify(post))
     .pipe(catchError((error: Response) => {
       if(error.status === 400){
         return Observable.throw(new BadInput(error.json())) ;
       }
       return Observable.throw(new AppError(error.json()));
    }));
  }
}


