import { Injectable } from '@angular/core';
import { CartItem } from 'app/entities/cart-item';
import { Product } from 'app/entities/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems : CartItem[] = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [];
  product:Product;
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  maxQuantity: Product["quantity"];

  constructor() { }

  

  addToCart(theCartItem: CartItem) {

    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined!;
    
    if (this.cartItems.length > 0) {
      // find the item in the cart based on item id

      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id )!;

      // check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);
    }
    
    if (alreadyExistsInCart  ) {
      
      // increment the quantity
      existingCartItem.quantity++ ;
      console.log(this.maxQuantity)
      if (existingCartItem.quantity === this.maxQuantity){
        console.log("not enough product")
      }
    }
    else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
      // this.cartItems =  [...this.cartItems, theCartItem]
    }
    
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals(){
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.prix;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.prix;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, prix=${tempCartItem.prix}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }

  decrementQuantity(theCartItem: CartItem) {
    const item: CartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id )!;
    item.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    
  }

  remove(theCartItem: CartItem) {

    // get index of item in the array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

}