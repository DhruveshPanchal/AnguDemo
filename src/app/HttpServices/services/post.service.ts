import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor(http: Http) {
    let _url = 'http://jsonplaceholder.typicode.com/posts';
    super(_url, http);
    // here super function is used for call contructor of base class
   }

  // --------------- Moved all code in data.service - common service------------------------

   /*getPosts(){
     return this.http.get(this.url)
      .catch(this.handleError);
   }

  createPost(post){
     return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  deletePost(id){
    return  this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error:Response){
    if(error.status === 400)
      return Observable.throw(new BadInput(error.json())) ;
    
    else if(error.status === 400)
          return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }*/

  //---------------------------  Old Code ----------------------------

  /*deletePost_Old(id){
    return  this.http.delete(this.url + '/' + id)
    .catch((error: Response) => {
        if(error.status === 400)
          return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
    });
  }

  createPost_Old(post){
    return this.http.post(this.url, JSON.stringify(post))
     .catch((error: Response) => {
       if(error.status === 400){
         return Observable.throw(new BadInput(error.json())) ;
       }
       return Observable.throw(new AppError(error.json()));
    });
  }*/
}


