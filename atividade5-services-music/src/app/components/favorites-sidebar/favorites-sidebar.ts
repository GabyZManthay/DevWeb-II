import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites-service';

@Component({
  selector: 'app-favorites-sidebar',
  imports: [CommonModule],
  templateUrl: './favorites-sidebar.html',
  styleUrl: './favorites-sidebar.css',
})
export class FavoritesSidebar {
  constructor(public favoritesService: FavoritesService) {}
}
