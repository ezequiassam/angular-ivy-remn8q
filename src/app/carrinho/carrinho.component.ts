import { Component, OnInit } from '@angular/core';
import { Carrinho, carrinho } from 'src/carrinho';
import { Product } from 'src/products';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho = [];
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const produtoId = Number(routeParams.get('produtoId'));
    const produto: Product = products.find(
      (produto) => produto.id == produtoId
    );
    carrinho.push({produto = produto, qtd = 1});
  }

  getTotal(){
    let total = 0;
    for(car in carrinho){
      total += (car.produto.price * car.qtd)
    }
    return total;
  }
}
