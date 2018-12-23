import { Component, OnInit } from '@angular/core';
//import { url } from 'inspector';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService              ) {

   }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
    
    // .map added in data service so upper code is new code, 
    // this.service.getAll()
    // .subscribe(response => {
    //   console.log(response.json() + 'Converted response in json');
    //   this.posts = response.json();
    // });
  }

  promiseExam(){
    this.service.promiseExample();
    //when we use promise then subscribe is not required
  }

  createPost(input: HTMLInputElement){
      let post : any = {title: input.value};
      input.value = '';

      this.service.create(post)
      .subscribe(newPost => {
        post.id = newPost.id;
        this.posts.splice(0, 0, post);
      }, (error :AppError) => {
        if(error instanceof BadInput)
          //this.form.setErrors(error.originalError);
          console.log(error);
        else throw error;
      });

      /*this.service.create(post)
      .subscribe(response => {
        console.log(response.json());
        post.id = response.json();
        //post['id'] = response.json();
        this.posts.splice(0, 0, post);
      //}, (error: Response) => {
      }, (error :AppError) => {
        if(error instanceof BadInput)
          //this.form.setErrors(error.originalError);
          console.log(error);
        else throw error;
        
      });*/
  }

  updatePost(post){
    //patch used for update some specific property only
    this.service.update(post).subscribe(updatedPost => {
      console.log(updatedPost);
    });
    //put example
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post)).subscribe(response => {
    //   console.log(response.json());
    // });
  }

  deletePost(post){

     this.service.delete(post.id)
     .subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    //}, (error : Response) => {
      //if(error.status === 404)
    }, (error : AppError) => {
      if(error instanceof NotFoundError)
       alert('This post has already been deleted!')
      else throw error;
    });
    
  /* this.service.delete(post.id).subscribe(response => 
    {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    //}, (error : Response) => {
      //if(error.status === 404)
    }, (error : AppError) => {
      if(error instanceof NotFoundError)
       alert('This post has already been deleted!')
      else throw error;
    });*/
  }
}
