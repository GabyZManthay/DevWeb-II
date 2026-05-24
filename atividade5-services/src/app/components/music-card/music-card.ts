import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites-service';

@Component({
  selector: 'app-music-card',
  imports: [],
  templateUrl: './music-card.html',
  styleUrl: './music-card.css',
})
export class MusicCard {
  constructor( public favoritesService: FavoritesService) {}
  
  @Input() music: any;

  isFavorite = false;

  toggleFavorite() {

    if (
      this.favoritesService.isFavorite(this.music.id)
    ) {

      this.favoritesService
        .removeFavorite(this.music.id);

    } else {

      this.favoritesService
        .addFavorite(this.music);
    }
  }

  static currentAudio: HTMLAudioElement | null = null;

  onPlay(audio: HTMLAudioElement) {

    if (
      MusicCard.currentAudio &&
      MusicCard.currentAudio !== audio
    ) {

      MusicCard.currentAudio.pause();

      MusicCard.currentAudio.currentTime = 0;
    }

    MusicCard.currentAudio = audio;
  }
}
