import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStore } from '../stores/cart.store';
import { StripeService } from '../services/stripe';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  cartStore = inject(CartStore)
  stripeService = inject(StripeService);

  checkout() {
    this.stripeService.createCheckoutSession().subscribe(({url}) => {
      location.href=url
    });
  }
}
