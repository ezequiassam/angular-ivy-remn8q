export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13',
    imageUrl:
      'https://a-static.mlcdn.com.br/1500x1500/apple-iphone-13-128gb-estelar-tela-61-12mp-ios/magazineluiza/233008600/bac007e05df392577f9b7f7d595e1dda.jpg',
    price: 6687.12,
    description:
      'iPhone 13. O sistema de câmera dupla mais avançado em um iPhone. Chip A15 Bionic com velocidade impressionante. Um grande salto em bateria. Projetado para durar. 5G ultrarrápido*. E tela Super Retina XDR mais brilhante.',
  },
  {
    id: 2,
    name: 'iPhone Pro',
    imageUrl:
      'https://a-static.mlcdn.com.br/1500x1500/apple-iphone-13-128gb-estelar-tela-61-12mp-ios/magazineluiza/233008600/bac007e05df392577f9b7f7d595e1dda.jpg',
    price: 12000,
    description:
      'O Apple iPhone 13 Pro é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.06 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2532x1170 pixel.',
  },
  {
    id: 3,
    name: 'iPhone Pro Max',
    imageUrl:
      'https://a-static.mlcdn.com.br/1500x1500/apple-iphone-13-128gb-estelar-tela-61-12mp-ios/magazineluiza/233008600/bac007e05df392577f9b7f7d595e1dda.jpg',
    price: 15000,
    description:
      'O Apple iPhone 13 Pro Max é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.7 polegadas coloca esse Apple no topo de sua categoria. ',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
