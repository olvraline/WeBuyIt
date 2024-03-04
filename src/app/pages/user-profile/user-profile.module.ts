import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasSearch, lasShoppingCart, lasBell, lasUserCircle, lasCreditCard, lasPen } from 'angular-line-awesome/icons';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';  
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import { HeaderModule } from '../home/header/header.module';

@NgModule({
  declarations: [
    UserProfileComponent
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
    HeaderModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { 
  constructor(library: LaIconLibrary) {
    library.addIcons([lasSearch, lasShoppingCart, lasBell, lasUserCircle, lasCreditCard, lasPen])
  }
}
