import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { PostService } from '../services/postService';
import { Subject } from 'rxjs/Subject';
import { FilterPipe } from '../pipes';
import { NgProgressService } from "ng2-progressbar";
import { Tag } from '../entities/tag';
import { Post } from '../entities/post';



// Observable class extensions
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

declare var jQuery: any;
@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: './post.component.html',
    providers: [PostService]
})
export class PostComponent implements OnInit, AfterViewInit {
    error: any;
    posts: Observable<Post[]>;
    constructor(private postService: PostService, private progressService: NgProgressService) {

    }
    ngOnInit(): void {
        this.progressService.start();
 
        // setTimeout(() => {
        //     this.progressService.inc(0.2);
        // }, 2000);
        this.postService.getPosts()
            .subscribe((posts) => {
              this.progressService.done();
              this.posts = posts, error => this.error = <any>error
            });

    }

    ngAfterViewInit(): any {
        jQuery("#menu-toggle").click(function (e) {
            e.preventDefault();
            jQuery("#wrapper").toggleClass("toggled");
        });


    }
}
// interface Post {
//     title: string;
//     body: string;
//     id: number;
// }