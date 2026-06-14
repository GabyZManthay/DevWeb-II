import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'https://fakestoreapi.com/users';

  constructor(
    private http: HttpClient
  ) {}

  getUser(id:number){

    return this.http.get<any>(
      `${this.api}/${id}`
    );

  }

  getUserByUsername(username: string) {
    return this.http.get<any[]>(this.api)
      .pipe(
        map(users => users.find(user => user.username === username))
      );
  }

  createUser(payload: { username: string; email: string; password: string }) {
    return this.http.post<any>(this.api, payload);
  }

}
