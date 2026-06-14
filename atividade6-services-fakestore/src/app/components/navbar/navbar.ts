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
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success';

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

  showNotification(message: string, type: 'success' | 'error' = 'success') {
    this.notificationMessage = message;
    this.notificationType = type;
    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }

  checkout() {
    const total = this.cartService.getTotal();

    if (this.cartService.getCart().length === 0) {
      this.showNotification('Seu carrinho está vazio 🛒', 'error');
      return;
    }

    this.showNotification(`Compra realizada com sucesso! 🎉\nTotal: $ ${total}`, 'success');

    this.cartService.clearCart();
    this.cartService.closeCart();
  }
}
