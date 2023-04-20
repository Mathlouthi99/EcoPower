import { Cart } from "./cart";
import { OrderMain } from "./order-main";

export class OrderItem {
    productName!:String;
    productDescription!:String;
    productPrice!:number;
    productStock!:number;
    count!:number;
    orderMain!:OrderMain;
    cart!:Cart;
}
