import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FakeStoreService } from '../../core/services/fake-store.service';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtos: any[] = [];
  filtro = '';
  categoria = '';

  constructor(private service: FakeStoreService) {}

  ngOnInit() {
    this.service.listarProdutos().subscribe({
      next: (r: any) => {
        this.produtos = r;
      },
      error: (e) => {
        console.log('ERRO:', e);
      }
    });
  }

  get produtosFiltrados() {
    const filtro = this.filtro.trim().toLowerCase();
    const categoriaFiltro = this.categoria.trim().toLowerCase();

    return this.produtos.filter((produto: any) => {
      const titulo = produto.title?.toLowerCase() ?? '';
      const categoriaProduto = produto.category?.name?.toLowerCase() ?? '';
      return titulo.includes(filtro) && categoriaProduto.includes(categoriaFiltro);
    });
  }
}
