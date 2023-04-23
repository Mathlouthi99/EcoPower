import { Component } from '@angular/core';
import { CategoryProduct } from 'app/entities/category-product';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss',
  '../../../../assets/admin/css/paper-dashboard.css',
  '../../../../assets/admin/demo/demo.css',
  '../../../../assets/admin/css/bootstrap.min.css',]
})
export class ListCategoryComponent {
  listCategory : Array<CategoryProduct>=[];

}
