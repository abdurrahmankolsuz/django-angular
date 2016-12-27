import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/postService'

@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: 'post.component.html',
  providers: [PostService]
})
export class PostComponent implements OnInit {
   error: any;
   posts : Post[];
  constructor(private postService: PostService) {
    this.postService
        .getPosts().subscribe(posts => {
          this.posts = posts;
        });
   }

  ngOnInit() {
 //   this.getPosts();
  }
}
interface Post {
  title: string;
  body: string;

 /* content: string;
  created_date: Date;
  modified_date: Date;
  is_active: Boolean;
  is_deleted: Boolean; */
}