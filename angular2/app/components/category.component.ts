import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/categoryService'

@Component({
  moduleId: module.id,
  selector: 'categories',
  templateUrl: 'category.component.html',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
   error: any;
   categories : Category[];
  constructor(private categoryService: CategoryService) {
    this.categoryService
        .getCategories().subscribe(categories => {
          this.categories = categories;
        });
   }

  ngOnInit() {
 //   this.getPosts();
  }
}
interface Category {
  title: string;

 /* content: string;
  created_date: Date;
  modified_date: Date;
  is_active: Boolean;
  is_deleted: Boolean; */
}