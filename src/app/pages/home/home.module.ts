import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { CadastroAnuncioModule } from '../cadastro-anuncio/cadastro-anuncio.module';
import { CadastroUsuarioModule } from '../cadastro-usuario/cadastro-usuario.module';
import { CadastroLojaModule } from '../cadastro-loja/cadastro-loja.module';
import { TelaPesquisaModule} from '../tela-pesquisa/tela-pesquisa.module';
import { VisualizacaoLojaModule } from '../visualizacao-loja/visualizacao-loja.module';
import { PaymentMethodModule } from "../payment-method/payment-method.module";
import { CarrinhoDeComprasModule } from '../carrinho-de-compras/carrinho-de-compras.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
        HeaderModule
    ],
    imports: [
        CommonModule,
        HeaderModule,
        CadastroAnuncioModule,
        CadastroUsuarioModule,
        CadastroLojaModule,
        TelaPesquisaModule,
        VisualizacaoLojaModule,
        PaymentMethodModule,
        CarrinhoDeComprasModule,
        FooterModule
    ],

})
export class HomeModule { }