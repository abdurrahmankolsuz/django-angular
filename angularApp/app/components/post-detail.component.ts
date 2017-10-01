import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { PostService } from '../services/postService';


@Component({
  moduleId: module.id,
  selector: 'post-detail',
  templateUrl: `post-detail.component.html`,
  providers: [PostService]
})
export class PostDetailComponent implements OnInit, OnDestroy {
    post:Post[];
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private postService: PostService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getPost(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPost(id: number) {
        this.postService.getPost(id).subscribe(
            post => this.post = post,
            error => this.errorMessage = <any>error);
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