import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../home/header/header.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalTelaComponent } from './principal-tela.component';



@NgModule({
  declarations: [
    PrincipalTelaComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    BrowserModule
  ], 
  exports: [
    PrincipalTelaComponent
  ]
})
export class PrincipalTelaModule { }
