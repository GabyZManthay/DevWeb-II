import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [RouterModule],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css',
})
export class Resultado {
  dados: any;

  constructor() {
    this.dados = history.state.dados;
  }
}
