import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private itemsSubject = new BehaviorSubject<Product[]>(this.items);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Product): boolean {
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      if (this.getProductCount(product) < product.limit) {
        return true;
      } else {
        return false;
      }
    } else {
      this.items.push(product);
      this.itemsSubject.next(this.items);
      return true;
    }
  }

  getProductCount(product: Product): number {
    return this.items.filter(item => item.id === product.id).length;
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  clearCart(): void {
    this.items = [];
    this.itemsSubject.next(this.items);
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter(item => item.id !== product.id);
    this.itemsSubject.next(this.items);
  }
}
