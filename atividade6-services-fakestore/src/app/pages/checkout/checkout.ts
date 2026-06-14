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
  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  confirmOrder() {

    if (this.cartService.getCart().length === 0) {
      alert('Carrinho vazio!');
      return;
    }

    const total = this.cartService.getTotal();

    alert(`Compra realizada com sucesso! 🎉 Total: $ ${total}`);

    this.cartService.clearCart();

    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.cartService.closeCart();
  }
}
