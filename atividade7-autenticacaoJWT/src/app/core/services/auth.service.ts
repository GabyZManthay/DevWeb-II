import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://api.escuelajs.co/api/v1/auth';
  private http = inject(HttpClient);

  login(dados: any) {
    return this.http.post(
      `${this.url}/login`,
      dados
    );
  }

  salvarToken(token: string) {
    localStorage.setItem(
      'token',
      token
    );
  }

  logout() {
    localStorage.clear();
  }

  isLogged() {
    return !!localStorage.getItem(
      'token'
    );
  }
}
