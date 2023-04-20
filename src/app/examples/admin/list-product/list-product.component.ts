import { Component } from '@angular/core';
import { Product } from 'app/entities/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css',
  '/src/assets/admin/css/paper-dashboard.css',
  '/src/assets/admin/demo/demo.css',
  '/src/assets/admin/css/bootstrap.min.css',]
})
export class ListProductComponent {
  productList: Array<Product> = [];

}
