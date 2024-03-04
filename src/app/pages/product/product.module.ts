import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasSearch, lasShoppingCart, lasBell, lasUserCircle, lasMapMarker, lasUser, lasStoreAlt, lasEllipsisH, lasStar } from 'angular-line-awesome/icons';
import { HeaderModule } from '../home/header/header.module';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    BrowserModule,
    AngularLineawesomeModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { 
  constructor(library: LaIconLibrary) {
    library.addIcons([lasSearch, lasShoppingCart, lasBell, lasUserCircle, lasMapMarker, lasUser, lasStoreAlt, lasEllipsisH, lasStar])
  }
}
