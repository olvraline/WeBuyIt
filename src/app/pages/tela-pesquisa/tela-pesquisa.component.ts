import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-pesquisa',
  templateUrl: './tela-pesquisa.component.html',
  styleUrls: ['./tela-pesquisa.component.scss']
})
export class TelaPesquisaComponent {
  public mobileFilters: any
  constructor() {
    window.scrollTo(0,0)
   }

   public showFilters() {
    
   }
}
