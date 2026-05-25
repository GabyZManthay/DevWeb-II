import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private api =
    'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

  constructor(private http: HttpClient) {}

  searchMusic(music: string) {

    const query = encodeURIComponent(music);

    return this.http.get<any>(
      `${this.api}${query}`
    );
  }

}