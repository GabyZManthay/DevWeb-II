import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoritesSidebar } from './components/favorites-sidebar/favorites-sidebar';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FavoritesSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade5');
}
