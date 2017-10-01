import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }    from '@angular/forms';
import {FilterPipe} from './pipes'



import { AppComponent } from './app.component';
import { PostComponent } from './components/post.component';
import { SearchComponent } from './components/search.component';
import { CategoryComponent } from './components/category.component';
import { AboutComponent } from './components/about.component';

import { ContainerComponent } from './components/container.component';
import {PostDetailComponent} from './components/post-detail.component'

import { PageContentWrapperComponent } from './components/page-content-wrapper.component';
import { SidebarWrapperComponent } from './components/sidebar-wrapper.component';

import { SocialComponent } from './components/social.component';

import { PostService } from './services/postService'
import { CategoryService } from './services/categoryService'
import {routing} from './app.routing'




@NgModule({
  imports:      [ BrowserModule , HttpModule , FormsModule,routing],
  declarations: [ AppComponent ,PostComponent ,CategoryComponent,AboutComponent,PageContentWrapperComponent
  ,SidebarWrapperComponent,SocialComponent,SearchComponent,ContainerComponent,PostDetailComponent,FilterPipe],
  bootstrap:    [ AppComponent],
  providers:    [PostService, CategoryService]
})
export class AppModule { }
