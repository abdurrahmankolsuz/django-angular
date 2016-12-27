import { Component } from '@angular/core';
import { PostService } from './services/postService';

@Component({
  selector: 'my-app',
  template: `<posts></posts>`,
  providers: [PostService]
})
export class AppComponent  {
 
}