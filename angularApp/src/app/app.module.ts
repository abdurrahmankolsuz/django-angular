import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule }    from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { FilterPipe} from './pipes'

import { DisqusModule } from 'angular2-disqus';
import { NgProgressModule } from 'ng2-progressbar';

import { PostComponent } from './components/post.component';
import { SearchComponent } from './components/search.component';
import { CategoryComponent } from './components/category.component';
import { AboutComponent } from './components/about.component';

import { ContainerComponent } from './components/container.component';
import { PostDetailComponent} from './components/post-detail.component'

import { PageContentWrapperComponent } from './components/page-content-wrapper.component';
import { SidebarWrapperComponent } from './components/sidebar-wrapper.component';

import { SocialComponent } from './components/social.component';

import { PostService } from './services/postService'
import { CategoryService } from './services/categoryService'

import { routing } from './app.routing'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,PostComponent ,CategoryComponent,
    AboutComponent,PageContentWrapperComponent,
    SidebarWrapperComponent,SocialComponent,SearchComponent,
    ContainerComponent,PostDetailComponent,FilterPipe
  ],
  imports: [BrowserModule,
  HttpModule,
  DisqusModule,NgProgressModule,
  FormsModule,
  routing  
  ],
  providers: [PostService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
