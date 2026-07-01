import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-categoria',
  imports: [CommonModule, FormsModule],
  templateUrl: './incluir-categoria.html',
  styleUrl: './incluir-categoria.css',
})
export class IncluirCategoria {
  nome = '';
  descricao = '';
  formAlterado = false;
  mensagemSucesso = '';

  constructor(private router: Router) {}

  salvar() {
    if (!this.nome.trim()) {
      this.mensagemSucesso = 'Informe o nome da categoria antes de salvar.';
      return;
    }

    this.formAlterado = false;
    this.mensagemSucesso = `Categoria "${this.nome}" foi incluída com sucesso (simulação).`;
    setTimeout(() => this.router.navigate(['/categorias']), 1200);
  }

  markAlterado() {
    this.formAlterado = true;
    this.mensagemSucesso = '';
  }
}
