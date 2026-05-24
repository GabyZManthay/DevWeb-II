import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites: any[] = [];

  sidebarOpen = false;

  constructor() {

    const saved =
      localStorage.getItem('favorites');

    if (saved) {

      this.favorites = JSON.parse(saved);
    }
  }

  toggleSidebar() {

    this.sidebarOpen = !this.sidebarOpen;
  }

  addFavorite(music: any) {

    const exists = this.favorites.find(
      item => item.id === music.id
    );

    if (!exists) {

      this.favorites.push(music);

      localStorage.setItem(
        'favorites',
        JSON.stringify(this.favorites)
      );
    }
  }

  removeFavorite(id: number) {

    this.favorites =
      this.favorites.filter(
        music => music.id !== id
      );

    localStorage.setItem(
      'favorites',
      JSON.stringify(this.favorites)
    );
  }

  isFavorite(id: number) {

    return this.favorites.some(
      music => music.id === id
    );
  }
}
