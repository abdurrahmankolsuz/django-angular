import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { 
    console.log('apoooo');

  }

  getPosts():Observable<any> {
      return this.http.get(this.apiURL)
              .map(res => res.json())
  
            //  .catch(this.handleError);
  }

  getPost(id: number): Observable<any> {
    
        const url = `${this.apiURL}/${id}`;
        return this.http.get(url).map(res => res.json())
            //.map(this.extractData)
            // .do(data => console.log('getPost: ' + JSON.stringify(data)))
            // .catch(this.handleError);
    }


 private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}