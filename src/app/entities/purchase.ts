import { Order } from "./order";
import { OrderItem } from "./order-item";
import { User } from "./user";

export class Purchase {
    customer!: User;
    order!: Order;
    orderItems!: OrderItem[]; 
}
