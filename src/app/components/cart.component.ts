import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../cart.service';
import { CurrencyPipe, NgIf, NgFor, CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: '../templates/cart.component.html',
  styleUrls: ['../styles/cart.component.css'],
  imports: [MatButtonModule, MatIconModule, MatCardModule, CommonModule, CurrencyPipe, NgIf, NgFor],
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  total = 0;
  products: any;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.items = items;
      this.total = this.cartService.getTotal();
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
