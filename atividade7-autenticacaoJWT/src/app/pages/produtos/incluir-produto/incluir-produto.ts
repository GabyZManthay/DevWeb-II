import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-produto',
  imports: [CommonModule, FormsModule],
  templateUrl: './incluir-produto.html',
  styleUrl: './incluir-produto.css',
})
export class IncluirProduto {
  nome = '';
  preco = '';
  descricao = '';
  formAlterado = false;
  mensagemSucesso = '';

  constructor(private router: Router) {}

  salvar() {
    if (!this.nome.trim()) {
      this.mensagemSucesso = 'Informe o nome do produto antes de salvar.';
      return;
    }

    this.formAlterado = false;
    this.mensagemSucesso = `Produto "${this.nome}" foi incluído com sucesso (simulação).`;
    setTimeout(() => this.router.navigate(['/produtos']), 1200);
  }

  markAlterado() {
    this.formAlterado = true;
    this.mensagemSucesso = '';
  }
}
