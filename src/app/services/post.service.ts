import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post';

const headerOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  createPost(postData) {
    return this.http.post<Post>(this.postUrl, postData, headerOption);
  }

  updatePost(postData) {
    const url = `${this.postUrl}/${postData.id}`;
    return this.http.put(url, postData, headerOption);
  }

  deletePost(postData) {
    const url = `${this.postUrl}/${postData.id}`;
    return this.http.delete(url);
  }

}
