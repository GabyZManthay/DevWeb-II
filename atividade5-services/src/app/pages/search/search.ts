import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../services/music-service';
import { MusicCard } from '../../components/music-card/music-card';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [CommonModule, ReactiveFormsModule, MusicCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  musics: any[] = [];

  loading = false;

  searched = false;

  searchHistory: string[] = [];

  form = new FormGroup({
    music: new FormControl('')
  });

  constructor(
    private musicService: MusicService,
    private cd: ChangeDetectorRef
  ) {}

  buscar() {

    this.searched = true;

    this.musics = [];

    const music = this.form.getRawValue().music;

    if (!music) return;

    if (!this.searchHistory.includes(music)) {

      this.searchHistory.unshift(music);

    }

    this.loading = true;

    this.musicService
      .searchMusic(music)
      .subscribe({

        next: (response) => {

          this.musics = response.data.slice(0, 12);

          this.loading = false;

          this.cd.detectChanges();
        },

        error: () => {

          this.loading = false;

          this.cd.detectChanges();
        }
      });
  }
}
