import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { 
    console.log('apoooo');

  }

  getPosts() {
    return this.http.get(this.apiURL)
              .map(res => res.json())
              
             // .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}