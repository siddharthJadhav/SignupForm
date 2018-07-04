import { Post } from './../../model/post';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title: string;
  post = {
    title: '',
    body: ''
  };

  @ViewChild('postForm') signupForm: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  createPost(form) {
    console.log('post : ', form.value);
    this.postService.createPost({title: form.value.title, body: form.value.body} as Post).subscribe((data: any) => {
      console.log('post created sucessfully : ', data);
    });
  }

}
