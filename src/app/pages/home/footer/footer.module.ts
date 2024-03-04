import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AngularLineawesomeModule, LaIconLibrary } from 'angular-line-awesome';
import { lasCamera} from 'angular-line-awesome/icons';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularLineawesomeModule

  ],
  exports: [
    FooterComponent,

  ] 
})
export class FooterModule { 
  constructor(library:LaIconLibrary){
    library.addIcons([lasCamera])
  }
}
