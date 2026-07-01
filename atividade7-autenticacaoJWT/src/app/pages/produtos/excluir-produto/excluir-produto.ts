import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir-produto',
  imports: [CommonModule],
  templateUrl: './excluir-produto.html',
  styleUrl: './excluir-produto.css',
})
export class ExcluirProduto {
  mensagemSucesso = '';

  constructor(private router: Router) {}

  excluir() {
    this.mensagemSucesso = 'Produto excluído com sucesso (simulação).';
    setTimeout(() => this.router.navigate(['/produtos']), 1200);
  }
}
