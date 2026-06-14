import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'https://fakestoreapi.com/auth/login';
  private readonly tokenKey = 'token';
  private readonly usernameKey = 'username';

  constructor(
    private http: HttpClient
  ) {}

  login(
    username:string,
    password:string
  ){

    return this.http.post(this.api,{
      username,
      password
    });

  }

  setSession(username: string, token: string) {
    localStorage.setItem(this.usernameKey, username);
    localStorage.setItem(this.tokenKey, token);
  }

  clearSession() {
    localStorage.removeItem(this.usernameKey);
    localStorage.removeItem(this.tokenKey);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
