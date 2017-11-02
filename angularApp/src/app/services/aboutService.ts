import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {
    private apiURL = 'http://localhost:8000/abouts';

    constructor(private http: Http) {

    }

    getAbout() {
        return this.http.get(this.apiURL)
            .map(res => res.json())
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}