/*
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/postService'

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [PostService]
})


export class SearchComponent implements OnInit {
   
   posts : Post[];
  constructor(private postService: PostService) {
    this.postService
        .getPosts().subscribe(posts => {
          this.posts = posts;
        });
   }

  ngOnInit() {
 
  }
}
interface Post {
  title: string;
  body: string;

}  */