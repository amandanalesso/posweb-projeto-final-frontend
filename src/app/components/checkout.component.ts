import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: '../templates/checkout.component.html',
  styleUrls: ['../styles/checkout.component.css'],
  imports: [CurrencyPipe]
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  items: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.items = items;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.total = this.cartService.getTotal();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.calculateTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.calculateTotal();
  }

  proceedToPayment() {
    //not implemented yet
  }
}
