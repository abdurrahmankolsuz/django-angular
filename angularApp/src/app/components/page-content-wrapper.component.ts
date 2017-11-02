import { Component, Output, Input, AfterViewInit } from '@angular/core';

// declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'page-content-wrapper',
    templateUrl: './page-content-wrapper.component.html',
})
export class PageContentWrapperComponent implements AfterViewInit {
    //   message: string ;

    // keyup(message:string):void{
    //   this.message= message;
    // }

    ngAfterViewInit(): any {
        // jQuery('#back-to-top').tooltip('show');
    }

}