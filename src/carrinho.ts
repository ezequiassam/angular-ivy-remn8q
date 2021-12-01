import { Product } from './products';

export interface Carrinho {
  id: number;
  product: Product;
  qtd: number;
}

export const carrinho = [];
