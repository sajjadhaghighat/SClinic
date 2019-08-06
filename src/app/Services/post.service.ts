import { Injectable } from '@angular/core';
import { IPost } from '../Models/post.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  selectedPost : IPost;
  postList : IPost[];
  URL : string = 'http://localhost:53358/api/';

  constructor(private http : HttpClient,private cookie:CookieService) { }

  postPost(emp : IPost){
    console.log(emp);
    return this.http.post(this.URL + 'Posts',emp);

  }
  putPost(id : number ,emp : IPost){
      return this.http.put(this.URL + 'Posts/' + id , emp);

  }

  getPost(id : number){
    this.http.get(this.URL + 'Posts/' + id)
    .toPromise().then(res => this.selectedPost = res as IPost);
    
  }

  getPostList(){
    this.http.get(this.URL + 'Posts')
    .toPromise().then(res => this.postList = res as IPost[]);
    
  }
 
  deletePost(id : number){
    return this.http.delete(this.URL + 'Posts/' + id);
  }
}
