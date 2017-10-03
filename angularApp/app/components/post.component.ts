import { Component, OnInit ,Input} from '@angular/core';
import { PostService } from '../services/postService';
import { Subject }           from 'rxjs/Subject';
import {FilterPipe} from '../pipes';

// Observable class extensions
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Rx';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  moduleId: module.id,
  selector: 'posts',
  templateUrl: 'post.component.html',
  providers: [PostService]
})
export class PostComponent implements OnInit {
   error: any;
   posts : Observable<Post[]>;

  //  @Input()
  //  msg : string;

  constructor(private postService: PostService) {
    
   }



  ngOnInit():void {
    this.postService
        .getPosts().subscribe(posts => {
          this.posts = posts,  error => this.error = <any>error
        });
  }
}
interface Post {
  title: string;
  body: string;
  id:number;
 /* content: string;
  created_date: Date;
  modified_date: Date;
  is_active: Boolean;
  is_deleted: Boolean; */
}