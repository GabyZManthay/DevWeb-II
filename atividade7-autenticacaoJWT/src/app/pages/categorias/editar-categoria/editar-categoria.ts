import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-categoria.html',
  styleUrl: './editar-categoria.css',
})
export class EditarCategoria {
  nome = 'Categoria Exemplo';
  descricao = '';
  formAlterado = false;
  mensagemSucesso = '';

  constructor(private router: Router) {}

  salvar() {
    if (!this.nome.trim()) {
      this.mensagemSucesso = 'O nome da categoria não pode ficar vazio.';
      return;
    }

    this.formAlterado = false;
    this.mensagemSucesso = `Categoria "${this.nome}" alterada com sucesso (simulação).`;
    setTimeout(() => this.router.navigate(['/categorias']), 1200);
  }

  markAlterado() {
    this.formAlterado = true;
    this.mensagemSucesso = '';
  }
}
