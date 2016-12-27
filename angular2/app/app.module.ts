import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }    from '@angular/forms';



import { AppComponent } from './app.component';
import { PostComponent } from './components/post.component';
//import { SearchComponent } from './components/search.component';
import { CategoryComponent } from './components/category.component';
import { PostService } from './services/postService'
import { CategoryService } from './services/categoryService'




@NgModule({
  imports:      [ BrowserModule , HttpModule , FormsModule],
  declarations: [ AppComponent ,PostComponent ,CategoryComponent],
  bootstrap:    [ AppComponent ,CategoryComponent],
  providers:    [PostService, CategoryService]
})
export class AppModule { }
