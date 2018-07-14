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
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean;

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

  newPostCreated(post: Post) {
    console.log('new post created : ', post);
    this.posts.unshift(post);
  }

  deletePost(post: Post) {
    console.log('deleted post : ', post);
    this.postService.deletePost(post).subscribe(res => {
      this.posts.forEach((elements, index) => {
        if (elements.id === post.id) {
          this.posts.splice(index, 1);
        }
      });
    });
  }

  updatePost(post: Post) {
    console.log('update post : ', post);
    this.currentPost = post;
    this.isEdit = true;
    console.log('posts : ', this.posts);
    window.scroll(0, 0);
  }

  isUpdatePost(post) {
    console.log('post updated sucessfully : ', post);
    this.posts.forEach((elements, index) => {
      if (elements.id === post.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
      }
    });
  }

}
