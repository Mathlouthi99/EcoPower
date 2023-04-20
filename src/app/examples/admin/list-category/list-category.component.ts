import { Component } from '@angular/core';
import { CategoryProduct } from 'app/entities/category-product';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css',
  '/src/assets/admin/css/paper-dashboard.css',
  '/src/assets/admin/demo/demo.css',
  '/src/assets/admin/css/bootstrap.min.css',]
})
export class ListCategoryComponent {
  listCategory : Array<CategoryProduct>=[];

}
