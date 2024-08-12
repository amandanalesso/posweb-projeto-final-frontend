import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatIconModule],
  templateUrl: '../templates/product-list.component.html',
  styleUrls: ['../styles/product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: '1', name: 'Camiseta Barlow Family', price: 35.00, image: 'assets/barlow-product-1.PNG', limit: 5 },
    { id: '2', name: 'Camiseta Soul and Fire Lyric', price: 35.00, image: 'assets/barlow-product-2.webp', limit: 5 },
    { id: '3', name: 'Camiseta Daykitty', price: 35.00, image: 'assets/barlow-product-3.webp', limit: 5 }
  ];

  constructor(private cartService: CartService, private snackBar: MatSnackBar) {}

  addToCart(product: Product) {
    if (this.cartService.addToCart(product)) {
      this.snackBar.open(`${product.name} added to cart`, 'Close', {
        duration: 2000,
      });
    } else {
      this.snackBar.open(`Limit reached for ${product.name}`, 'Close', {
        duration: 2000,
      });
    }
  }
}
