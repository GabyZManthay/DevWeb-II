import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-categoria',
  imports: [CommonModule],
  templateUrl: './excluir-categoria.html',
  styleUrl: './excluir-categoria.css',
})
export class ExcluirCategoria {
  mensagemSucesso = '';

  constructor(private router: Router) {}

  excluir() {
    this.mensagemSucesso = 'Categoria excluída com sucesso (simulação).';
    setTimeout(() => this.router.navigate(['/categorias']), 1200);
  }
}
