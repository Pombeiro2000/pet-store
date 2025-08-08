import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productStore } from '../stores/product.store';
import { ProductCard } from '../components/product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productStore = inject(productStore);

  constructor() {
    this.productStore.loadProducts();
  }
}
