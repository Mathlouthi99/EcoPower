import { Time } from "@angular/common";
import { OrderItem } from "./order-item";
import { Product } from "./product";

export class OrderMain {
    OrderId!:number;
    totalPrice!:number;
    buyerEmail!:string;
    buyerName!:string;
    buyerPhone!:string;
    buyerAddress!:string;
    orderStatus!:number;
    createdDate!:Date;
    updateTime!:Time;
    orderItems!:OrderItem;
    products!:Product;
}
