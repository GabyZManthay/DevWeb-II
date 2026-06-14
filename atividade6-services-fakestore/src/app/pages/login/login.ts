import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';
  loading = false;
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.loading = true;
    this.error = '';

    this.auth
      .login(
        this.username,
        this.password
      )
      .subscribe({
        next: (data: any) => {
          this.auth.setSession(this.username, data.token);
          this.router.navigate(['/home']);
        },
        error: (err: any) => {
          this.error = 'Falha no login. Verifique usuário e senha.';
          console.error('Login error', err);
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}