import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  get estaLogado() {
    return this.auth.isLogged();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
