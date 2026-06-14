import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, Navbar],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit{
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success';

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  showNotification(message: string, type: 'success' | 'error' = 'success', duration: number = 3000) {
    this.notificationMessage = message;
    this.notificationType = type;
    setTimeout(() => {
      this.notificationMessage = '';
    }, duration);
  }

  confirmOrder() {

    if (this.cartService.getCart().length === 0) {
      this.showNotification('Carrinho vazio!', 'error');
      return;
    }

    const total = this.cartService.getTotal();

    const purchaseDuration = 5000;
    this.showNotification(`Compra realizada com sucesso! 🎉 Total: $ ${total}`, 'success', purchaseDuration);

    this.cartService.clearCart();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, purchaseDuration + 200);
  }

  ngOnInit() {
    this.cartService.closeCart();
  }
}
