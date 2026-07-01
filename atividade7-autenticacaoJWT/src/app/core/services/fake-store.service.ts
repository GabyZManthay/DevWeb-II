import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  private url = 'https://api.escuelajs.co/api/v1';
  private http = inject(HttpClient);

  listarProdutos() {
    return this.http.get(
      `${this.url}/products`
    );
  }

  listarCategorias() {
    return this.http.get(
      `${this.url}/categories`
    );
  }
}
