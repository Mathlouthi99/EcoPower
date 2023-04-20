import { Injectable } from '@angular/core';
import { Product } from '../entities/product';
import { FormGroup } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProduct } from '../entities/category-product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:9090/product/'
  product: Product = new Product();

  public dataForm!: FormGroup;

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + 'all');
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}get/` + id);
  }
  addProduct(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'add', formData);
  }


  updateProduct(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'update', formData);
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}delete/${product.id}`;
    return this.httpClient.delete<Product>(url);
  }
  
  getProductByCategory(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + 'getByCat/' + id);
  }

  getProductsbyPrice(minPrice: number, maxPrice:number) :Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.baseUrl + 'getByPrice/' + minPrice +'/'+ maxPrice);
  }
  getImagesByProducts(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + '/images/' + id);
  }
 
  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
