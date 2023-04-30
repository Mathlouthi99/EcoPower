import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from 'app/entities/purchase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = 'http://localhost:9090/api/checkout/purchase';

  //private paymentIntentUrl = 'http://localhost:8181/api/checkout/payment-intent';
  

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);    
  }

 /* createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo);
  }**/

}
