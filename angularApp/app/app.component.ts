import { Component } from '@angular/core';
import { PostService } from './services/postService';



@Component({
  selector: 'my-app',
  template: `
  <div id="wrapper">
  <sidebar-wrapper></sidebar-wrapper>
  <page-content-wrapper></page-content-wrapper>
 </div>`,
  providers: [PostService]
})
export class AppComponent  {
 
}