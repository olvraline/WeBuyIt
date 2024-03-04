import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../home/header/header.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoDeComprasComponent } from './carrinho-de-compras.component';


@NgModule({
  declarations: [CarrinhoDeComprasComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    BrowserModule
  ]
})
export class CarrinhoDeComprasModule { }
