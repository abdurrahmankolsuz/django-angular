import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class CategoryService {
    private apiURL = 'http://localhost:8000/tags';

    constructor(private http: Http) {

    }

    getCategories() {
        return this.http.get(this.apiURL)
            .map(res => res.json())

        // .catch(this.handleError);
    }

   getPostByTag(tag: string): Observable<any> {
       debugger;
        const url = `${this.apiURL}/${tag}`;
        return this.http.get(url).map(res => res.json())
        //.map(this.extractData)
        // .do(data => console.log('getPost: ' + JSON.stringify(data)))
        // .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}