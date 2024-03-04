import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProductComponent } from './pages/product/product.component';
import { PrincipalTelaComponent } from './pages/principal-tela/principal-tela.component';
import { CadastroAnuncioComponent } from './pages/cadastro-anuncio/cadastro-anuncio.component';
import { TelaPesquisaComponent } from './pages/tela-pesquisa/tela-pesquisa.component';
import { CadastroLojaComponent } from './pages/cadastro-loja/cadastro-loja.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { VisualizacaoLojaComponent } from './pages/visualizacao-loja/visualizacao-loja.component';
import { LoginComponent } from './pages/login/login.component';
import { CarrinhoDeComprasComponent } from './pages/carrinho-de-compras/carrinho-de-compras.component';

const routes: Routes = [
  {path: 'home',  pathMatch: `full`, component: PrincipalTelaComponent},
  {path: '', redirectTo: 'home',pathMatch: `full`},
  {path: 'user', pathMatch: `full`, component: UserProfileComponent},
  {path: 'product', pathMatch: `full`, component: ProductComponent},
  {path: 'anuncio', pathMatch: `full`, component: CadastroAnuncioComponent},
  {path: 'search', pathMatch: `full`, component: TelaPesquisaComponent},
  {path: 'store-register', pathMatch: `full`, component: CadastroLojaComponent},
  {path: 'user-register', pathMatch: `full`, component: CadastroUsuarioComponent},
  {path: 'payment-method', pathMatch: `full`, component: PaymentMethodComponent},
  {path: 'store', pathMatch: `full`, component: VisualizacaoLojaComponent},
  {path: 'cart', pathMatch: `full`, component: CarrinhoDeComprasComponent},
  {path: 'login', pathMatch: `full`, component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }