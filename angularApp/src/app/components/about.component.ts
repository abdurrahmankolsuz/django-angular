import { Component, AfterViewInit,OnInit } from '@angular/core';
import { AboutService } from '../services/aboutService'
import { About } from '../entities/about';

declare var jQuery: any;
@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: './about.component.html',
    providers: [AboutService]
})
export class AboutComponent implements AfterViewInit,OnInit {
    error: any;
    about: Array <About>;
    constructor(private aboutService: AboutService) {}
 
    ngOnInit() {
          this.aboutService
            .getAbout().subscribe(about => {
                this.about = about;
            });
    }
     ngAfterViewInit(): any {
        jQuery("#menu-toggle").click(function (e) {
            e.preventDefault();
            jQuery("#wrapper").toggleClass("toggled");
        });
    }
  
}
