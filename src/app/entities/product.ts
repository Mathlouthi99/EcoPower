import { CategoryProduct } from "./category-product";

export class Product {
     id!:number;
     name!:string;
     description!:string;
     price!:number;
     quantity!:number;
     stock!:number;
     status!:number;
     productCategory!:CategoryProduct;

}
