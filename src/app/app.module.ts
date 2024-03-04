import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { CadastroUsuarioModule } from "./pages/cadastro-usuario/cadastro-usuario.module";
import { PaymentMethodModule } from "./pages/payment-method/payment-method.module";
import { CarrinhoDeComprasComponent } from './pages/carrinho-de-compras/carrinho-de-compras.component';
import { PrincipalTelaModule } from './pages/principal-tela/principal-tela.module';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileModule } from './pages/user-profile/user-profile.module';
import { ProductModule } from './pages/product/product.module';
import { CarrinhoDeComprasModule } from './pages/carrinho-de-compras/carrinho-de-compras.module';
import { LoginComponent } from './pages/login/login.component';
import { FooterModule } from './pages/home/footer/footer.module';

registerLocaleData(en);

@NgModule({
  
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HomeModule,
        CadastroUsuarioModule,
        PaymentMethodModule,
        PrincipalTelaModule,      
        AppRoutingModule,
        UserProfileModule,
        ProductModule,
        PrincipalTelaModule,
        LoginModule,
        CarrinhoDeComprasModule,
        FooterModule
    ]

})
export class AppModule { }