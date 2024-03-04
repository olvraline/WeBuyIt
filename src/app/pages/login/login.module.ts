import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasSearch, lasShoppingCart, lasUser, lasUserCircle, lasBell } from 'angular-line-awesome/icons';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonGroupComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    BrowserModule,
    AngularLineawesomeModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    ReactiveFormsModule
  ], 
  exports: [LoginComponent]
})
export class LoginModule {
  constructor(library:LaIconLibrary){
    library.addIcons([lasSearch, lasUserCircle, lasShoppingCart, lasBell])
  }
 }
