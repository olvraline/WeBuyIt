import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-tela',
  templateUrl: './principal-tela.component.html',
  styleUrls: ['./principal-tela.component.scss']
})
export class PrincipalTelaComponent {
  constructor() {
    window.scrollTo(0,0)
   }
}