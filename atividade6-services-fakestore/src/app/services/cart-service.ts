import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  favorites: any[] = [];
  cartOpen = false;

  constructor() {
    this.load();
  }

  openCart() {
    this.cartOpen = true;
  }

  closeCart() {
    this.cartOpen = false;
  }

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

  /* ================= CART ================= */

  addToCart(product: any) {
    const item = this.cart.find(p => p.id === product.id);

    if (item) {
      item.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.save();
  }

  decrease(product: any) {
    const item = this.cart.find(p => p.id === product.id);

    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
      this.cart = this.cart.filter(p => p.id !== product.id);
    }

    this.save();
  }

  remove(product: any) {
    this.cart = this.cart.filter(p => p.id !== product.id);
    this.save();
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  /* ================= FAVORITES ================= */

  toggleFavorite(product: any) {
    const exists = this.favorites.find(p => p.id === product.id);

    if (exists) {
      this.favorites = this.favorites.filter(p => p.id !== product.id);
    } else {
      this.favorites.push(product);
    }

    this.save();
  }

  isFavorite(id: number) {
    return this.favorites.some(p => p.id === id);
  }

  getFavorites() {
    return this.favorites;
  }

  /* ================= STORAGE ================= */

  save() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  load() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  clearCart() {
    this.cart = [];
    this.save();
  }
}
