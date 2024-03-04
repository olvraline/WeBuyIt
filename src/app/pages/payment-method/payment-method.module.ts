import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../home/header/header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentMethodComponent } from './payment-method.component';
import { HeaderModule } from '../home/header/header.module';




@NgModule({
  declarations: [
    PaymentMethodComponent,
    ],
  exports: [PaymentMethodComponent],
  imports: [
    CommonModule, NzButtonModule, NzFormModule, NzSelectModule, ReactiveFormsModule,
    HeaderModule
  ]

})
export class PaymentMethodModule { }
