import { Component } from '@angular/core';
import { PostService } from './services/postService';



@Component({
  selector: 'my-app',
  template: `<sidebar-wrapper></sidebar-wrapper>
  <page-content-wrapper></page-content-wrapper>
 `,
  providers: [PostService]
})
export class AppComponent  {
 
}