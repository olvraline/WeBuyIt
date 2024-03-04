import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../home/header/header.module';

@NgModule({
    declarations: [
        CadastroUsuarioComponent
    ],
    exports: [CadastroUsuarioComponent],
    imports: [
        CommonModule, NzButtonModule, NzFormModule, NzSelectModule, ReactiveFormsModule,
        HeaderModule
    ]
})
export class CadastroUsuarioModule { }
