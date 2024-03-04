import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasSearch, lasShoppingCart, lasBell, lasUserCircle } from 'angular-line-awesome/icons';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AngularLineawesomeModule,
    NzFormModule, 
    NzSelectModule, 
    NzButtonModule,
    NzUploadModule,
    NzImageModule,
    ReactiveFormsModule,
    RouterTestingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
  constructor(library: LaIconLibrary) {
    library.addIcons([lasSearch, lasShoppingCart, lasBell, lasUserCircle])
  }
}