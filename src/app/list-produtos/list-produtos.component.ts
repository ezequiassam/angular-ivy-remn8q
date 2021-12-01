import { Component, OnInit } from '@angular/core';
import { produtos } from '../produtos';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css'],
})
export class ListProdutosComponent {
  produtos = produtos;
}
