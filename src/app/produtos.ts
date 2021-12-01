export interface Produto {
  id: number;
  name: string;
  value: number;
  description: string;
}

export const produtos = [
  {
    id: 1,
    name: 'Iphone 13',
    value: 6687.12,
    description:
      'Iphone 13. Sistema de câmera dupla (grande-angular e ultra-angular) de 12 MP, Modo Cinema para gravação de vídeos com profundidade de campo (1080p a 30 qps), O iOS é o sistema operacional móvel mais pessoal e seguro do mundo. Ele vem com muitos recursos poderosos e foi criado para proteger sua privacidade, A15 Bionic.',
  },
  {
    id: 2,
    name: 'Echo Dot (3.ª Geração)',
    value: 331.55,
    description:
      'O Echo Dot (3.ª Geração) é o eletrônico mais popular da Amazon, exatamente por ser barato e ter ótima qualidade. Ele é pequeno e leve, com dimensões de apenas 43 mm x 99 mm x 99 mm e peso de 300 gramas. Todo o controle do aparelho é feito via comandos de voz, com a Alexa respondendo prontamente. Além de ligar e mandar mensagens para quem você quiser sem precisar encostar no celular, com ele você controla dispositivos compatíveis de casa inteligente, como lâmpadas, aspiradores, TVs e termostatos.',
  },
  {
    id: 3,
    name: 'Kindle (10.ª Geração)',
    value: 399.0,
    description:
      'O Kindle tem 4 GB de armazenamento para guardar milhares de livros que você baixa via Wi-Fi, e o recurso Page Flip existe para salvar automaticamente a página que você está lendo. Então, você pode interromper a leitura a qualquer momento, e quando retomar a atividade continuará exatamente do ponto em que parou. Você também pode fazer anotações durante a leitura.',
  },
  {
    id: 4,
    name: 'Fire TV Stick',
    value: 449.0,
    description:
      'Fire TV Stick. Este aparelho conta com um sistema operacional completo para a sua TV, transformando qualquer aparelho em uma Smart TV. Com ele, você pode baixar os aplicativos de serviços de streaming — como Netflix, Disney+ e o próprio Prime Video — para assistir na tela grande. É uma boa opção também para quem tem uma Smart TV mais antiga, que não recebe novas atualizações ou ficou sem acesso aos serviços mais recentes, lançados nos últimos anos.',
  },
  {
    id: 5,
    name: 'Kindle Paperwhite',
    value: 659.0,
    description:
      'A versão Paperwhite do Kindle tem Wi-Fi, tela sensível ao toque, design fino e leve e não cansa a vista, pois sua tela especial parece uma folha de papel, sem reflexos. A tela de 6 polegadas tem iluminação embutida mais potente do que a do Kindle básico, mas não agride os olhos e proporciona horas e horas de leitura sem cansaço, não emitindo também aquela luz azulada típica de smartphones e tablets: ou seja, você pode ler à vontade na cama, antes de dormir, que seu sono não será prejudicado.',
  },
  {
    id: 6,
    name: 'Echo Dot (4.ª Geração)',
    value: 529.0,
    description:
      'A nova geração do Echo Dot tem um formato diferente, mas continuou fazendo sucesso ao manter as principais características dos dispositivos da Amazon. Ele tem um novo design de áudio com direcionamento frontal que promete trazer sons mais graves e uma experiência superior ao ouvir músicas, podcasts e o que mais você quiser escutar. Mesmo assim, ele continua com um tamanho reduzido e que pode ser facilmente colocado em qualquer local da casa que tenha acesso a uma tomada e ao Wi-Fi.',
  },
  {
    id: 7,
    name: 'Redmi Note 10S',
    value: 1879.0,
    description:
      'Este celular chega equipado com o processador MediaTek Helio G95 e 6 GB de RAM (até mesmo nos modelos com 64 GB de armazenamento), sendo uma opção interessante para quem deseja jogar alguns games mais recentes — que podem não rodar tão bem no modelo mais básico da linha. Além disso, a quantidade extra de memória RAM é um alívio para quem costuma abrir diversos aplicativos e alternar entre eles com frequência.',
  },
];
