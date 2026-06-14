import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-produto',
  imports: [CommonModule, Navbar],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto implements OnInit {

  product:any;

  constructor(
    private route:ActivatedRoute,
    private service:ProductService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit() {

  const id =
    Number(
      this.route.snapshot.paramMap.get('id')
    );

  console.log('ID recebido:', id);

  this.service
    .getProduct(id)
    .subscribe({
      next: (data) => {

        console.log('Produto recebido:', data);

        this.product = data;
        this.cdr.detectChanges();

      },
      error: (err) => {

        console.error('Erro ao buscar produto:', err);

      }
    });

}
}
