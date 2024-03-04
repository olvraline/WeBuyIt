import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroLojaComponent } from './cadastro-loja.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __param } from 'tslib';
import { HeaderModule } from "../home/header/header.module";


@NgModule({
    declarations: [
        CadastroLojaComponent
    ],
    exports: [
        CadastroLojaComponent
    ],
    imports: [
        CommonModule, NzButtonModule, NzFormModule, NzSelectModule, ReactiveFormsModule,
        HeaderModule
    ]
})
  export class CadastroLojaModule { }