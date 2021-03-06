import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { title } from "process";
import { Post } from "./post.model";
import {map} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class PostsService{

    constructor(private http:HttpClient){}
    createAndStorePost(title:string,content:string){

    const postData:Post={title:title,content:content};
        this.http
      .post<{name:string}>(
        'https://ng-complete-guide-c6aa8-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });

    }
    fetchPosts(){

        this.http.get<{[key:string]:Post}>( 'https://ng-complete-guide-c6aa8-default-rtdb.firebaseio.com/posts.json').
    pipe(map(responseData=>{
      const postArray:Post[]=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key],id:key});

        }
      }
      return postArray;
    }))
    .subscribe(posts=>{
    });
    }
}