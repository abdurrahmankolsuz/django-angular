import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../services/postService';
import { Tag } from '../entities/tag';
import { Post } from '../entities/post';


@Component({
    moduleId: module.id,
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    providers: [PostService]
})
export class PostDetailComponent implements OnInit, OnDestroy {
    // post: Post[];
    post: Post;
    tags: Array<Tag>;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private postService: PostService) {

       
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let slug = params['slug'];
                this.getPost(slug);
            });
           
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPost(slug: string) {
        this.postService.getPost(slug).subscribe(
            post => this.post = post,
            error => this.errorMessage = <any>error);
    }


}
// interface Post {
//     title: string;
//     body: string;
//     id: number;
// }