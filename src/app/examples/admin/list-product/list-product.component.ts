import { Component } from '@angular/core';
import { Product } from 'app/entities/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss',
              '../../../../assets/admin/css/paper-dashboard.css',
              '../../../../assets/admin/demo/demo.css',
              '../../../../assets/admin/css/bootstrap.min.css']
})
export class ListProductComponent {
  productList: Array<Product> = [];
}
