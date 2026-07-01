import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FakeStoreService } from '../../core/services/fake-store.service';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
  categorias: any[] = [];
  filtro = '';

  constructor(private service: FakeStoreService) {}

  ngOnInit() {
    this.service.listarCategorias().subscribe({
      next: (r: any) => {
        this.categorias = r;
      },
      error: (e) => {
        console.log('ERRO:', e);
      }
    });
  }

  get categoriasFiltradas() {
    const filtro = this.filtro.trim().toLowerCase();
    return this.categorias.filter((categoria: any) => {
      return categoria.name?.toLowerCase().includes(filtro);
    });
  }
}
