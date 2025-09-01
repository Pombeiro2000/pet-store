import { inject, Injectable } from '@angular/core';
import { CartStore } from '../stores/cart.store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  cartStore = inject(CartStore);
  http = inject(HttpClient);

  createCheckoutSession() {
    const items = this.cartStore.items();
    const totalAmount = this.cartStore.totalAmount();

    return this.http.post<{url: string}>(
      'http://localhost:3000/api/checkout', {
        items: items.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
          stripePriceId: item.stripePriceId
        })),
        totalAmount: totalAmount
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }
      );
  }
}
