import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mostrarNavbar = signal(true);
  protected readonly title = signal('atividade7-autenticacaoJWT');

  constructor(router: Router) {
    this.mostrarNavbar.set(router.url !== '/login');

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostrarNavbar.set(event.urlAfterRedirects !== '/login');
      }
    });
  }
}
