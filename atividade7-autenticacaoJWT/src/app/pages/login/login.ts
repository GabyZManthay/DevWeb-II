import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  email = '';
  senha = '';
  erro = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.auth.isLogged()) {
      this.router.navigate(['/produtos']);
    }
  }

  preencherExemplo() {
    this.email = 'admin@mail.com';
    this.senha = 'admin123';
  }

  login() {
    this.auth.login({
      email: this.email,
      password: this.senha
    }).subscribe({
      next: (res: any) => {
        this.auth.salvarToken(res.access_token);
        this.router.navigate(['/produtos']);
      },
      error: () => {
        this.erro = true;
      }
    });
  }
}
