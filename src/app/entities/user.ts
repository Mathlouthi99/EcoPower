import { Cart } from "./cart";

export class User {
    id!:number;
    email!:string;
    password!:string;
    name!:string;
    phone!:string;
    address!:string;
    active!:boolean;
    role!:string;
    cart!:Cart;
}
