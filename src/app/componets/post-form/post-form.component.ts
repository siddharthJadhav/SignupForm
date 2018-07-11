import { Post } from './../../model/post';
import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title: string;
  // post = {
  //   title: '',
  //   body: ''
  // };
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  @ViewChild('postForm') postForm: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  createPost(form) {
    console.log('post : ', form.value);
    this.postService.createPost({title: form.value.title, body: form.value.body} as Post).subscribe((data: any) => {
      console.log('post created sucessfully : ', data);
      this.newPost.emit(data);
      // form.reset(); // both command are work for resetting form
      // this.postForm.reset();
    });
  }

  updatePost(form) {
    console.log('update post : ', form.value);
    console.log('current post : ', this.currentPost);
  }

}
