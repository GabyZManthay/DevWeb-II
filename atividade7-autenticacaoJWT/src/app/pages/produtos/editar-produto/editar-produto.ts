import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.css',
})
export class EditarProduto {
  nome = 'Produto Exemplo';
  preco = '199.99';
  formAlterado = false;
  mensagemSucesso = '';

  constructor(private router: Router) {}

  salvar() {
    if (!this.nome.trim()) {
      this.mensagemSucesso = 'O nome do produto não pode ficar vazio.';
      return;
    }

    this.formAlterado = false;
    this.mensagemSucesso = `Produto "${this.nome}" alterado com sucesso (simulação).`;
    setTimeout(() => this.router.navigate(['/produtos']), 1200);
  }

  markAlterado() {
    this.formAlterado = true;
    this.mensagemSucesso = '';
  }
}
