import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   private api = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>(this.api);
  }

  getProduct(id: number) {
    return this.http.get<any>(
      `${this.api}/${id}`
    );
  }
}
