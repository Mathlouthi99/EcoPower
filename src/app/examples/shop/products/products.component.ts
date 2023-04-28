import { Component, Input, OnInit } from '@angular/core';
import { CategoryProduct } from 'app/entities/category-product';
import { Product } from 'app/entities/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'
 ]
})
export class ProductsComponent implements OnInit{

  @Input() products: Product[] = [];
  productList: Array<Product> = [];
  categoryList: Array<CategoryProduct>=[]
  minPrice: number = 0;
  maxPrice: number = 0;
  id:number = 0;
  Checked: boolean = false;
 

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  
   
 }
 
 getProducts(): void {
   this.productService.getProductList().subscribe((data: Product[]) => {
     this.productList = data;
   });
 }
 getProductsbyPrice(minPrice : number, maxPrice : number): void {
   this.productService.getProductsbyPrice(this.minPrice,this.maxPrice).subscribe((data: Product[]) => {
     this.productList = data;
   });
 }
 


}
