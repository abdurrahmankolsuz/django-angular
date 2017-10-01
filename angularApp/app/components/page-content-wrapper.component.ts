import { Component ,Output,Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'page-content-wrapper',
  templateUrl: `page-content-wrapper.component.html`
})
export class PageContentWrapperComponent  {
  searchBox: string;

keyup(message:string):void{
  this.searchBox= message;
}
 
}