import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SortPipe } from '../../pipes/sort-pipe';
import { FilterPipe } from '../../pipes/filter-pipe';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navbar, FormsModule, RouterModule, FilterPipe, SortPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  products:any[]=[];
  searchText: string = '';
  sortOption: string = 'default';
  cartOpen: boolean = false;
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success';

  constructor(
    private productService:ProductService,
    private cdr: ChangeDetectorRef,
    public cartService: CartService
  ){}

  showNotification(message: string, type: 'success' | 'error' = 'success') {
    this.notificationMessage = message;
    this.notificationType = type;
    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }

  ngOnInit(): void {

    this.productService
      .getProducts()
      .subscribe(data=>{

        console.log('Produtos recebidos:', data);

        this.products=data;
        this.cdr.detectChanges();
      });

  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.showNotification('Produto adicionado ao carrinho!', 'success');
  }

  checkout() {
    this.showNotification('Compra finalizada com sucesso 🎉', 'success');
    this.cartService.clearCart();
    this.cartOpen = false;
  }
}
