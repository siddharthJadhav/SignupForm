import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

}
