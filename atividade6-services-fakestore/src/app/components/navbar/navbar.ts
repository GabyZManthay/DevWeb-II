import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(
    private router: Router,
    public cartService: CartService,
    private authService: AuthService
  ) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  checkout() {
    const total = this.cartService.getTotal();

    if (this.cartService.getCart().length === 0) {
      alert('Seu carrinho está vazio 🛒');
      return;
    }

    alert(`Compra realizada com sucesso! 🎉\nTotal: $ ${total}`);

    this.cartService.clearCart();
    this.cartService.closeCart();
  }
}
