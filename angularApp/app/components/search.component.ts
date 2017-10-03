
import { Component, OnInit ,EventEmitter, Input, Output} from '@angular/core';
import { PostService } from '../services/postService'

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [PostService]
})


export class SearchComponent implements OnInit {
	

 // @Output()searchBox: EventEmitter<string>  = new EventEmitter<string>();
  
   
   posts : Post[];
  constructor(private postService: PostService) {
    this.postService
        .getPosts().subscribe(posts => {
          this.posts = posts;
        });
   }

  ngOnInit() {

  }
// onKey(event: any) { // without type info

//    this.searchBox.emit += event.target.value ;
// }


}  
interface Post {
  title: string;
  body: string;}