import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAnuncioComponent } from './cadastro-anuncio.component';
import { HeaderModule } from '../home/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import {MatButtonToggleModule,MatButtonToggle} from '@angular/material/button-toggle';
import {NzUploadModule } from 'ng-zorro-antd/upload';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [
    CadastroAnuncioComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NzButtonModule,
    RouterModule,
    NzFormModule,
    MatButtonToggleModule,
    NzUploadModule,
    HeaderModule
  ],
  exports: [
    CadastroAnuncioComponent
  ],
})
export class CadastroAnuncioModule { }
