import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.postService.getPost().subscribe(posts => {
      console.log('posts list : ', posts);
      this.posts = posts;
    });
  }

}
