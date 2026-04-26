import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [DatePipe],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css',
})
export class Resultado implements OnInit{
    hoje = new Date();

    dados: any = {};

    ngOnInit(): void {

      const matricula = localStorage.getItem('matricula');

      if (matricula) {
        this.dados = JSON.parse(matricula);
      }

    }
}
