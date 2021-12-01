import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
})
export class ProdutosDetalhesComponent implements OnInit {
  produto: Product | undefined;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const produtoId = Number(routeParams.get('produtoId'));
    this.produto = products.find((produto) => produto.id == produtoId);
  }
}
