import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/categoryService';
import { Post } from '../entities/post';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Observable class extensions
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    moduleId: module.id,
    selector: 'tag-post',
    templateUrl: './tag-post.component.html',
    providers: [CategoryService]

})
export class TagPostComponent implements OnInit {
    error: any;
    posts: Observable<Post[]>;
    errorMessage: string;
    private sub: Subscription;
    tag: string;

    
    constructor(private route: ActivatedRoute,
        private router: Router,private categoryService: CategoryService) {
    
    }
    getPostByTag(tag: string) {
        this.categoryService.getPostByTag(tag).subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
            
    }

    ngOnInit() : void {
           this.sub = this.route.params.subscribe(
            params => {
                this.tag = params['tag'];
                debugger;
                this.getPostByTag(this.tag);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
