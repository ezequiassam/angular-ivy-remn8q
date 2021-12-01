import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListProdutosComponent },
      { path: 'produtos/:produtoId', component: ProdutosDetalhesComponent },
      { path: 'carrinho/:produtoId', component: CarrinhoComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopbarComponent,
    ListProdutosComponent,
    ProdutosDetalhesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
