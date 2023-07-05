import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegistroComponent } from './modules/auth/pages/registro/registro.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { CalendarioComponent } from './modules/calendario/pages/calendario/calendario.component';
import { GuardadosComponent } from './modules/guardados/pages/guardados/guardados.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { NotasComponent } from './modules/notas/pages/notas/notas.component';
import { UsuarioComponent } from './modules/usuario/pages/usuario/usuario.component';
import { ConfigUsuarioComponent } from './modules/usuario/pages/config-usuario/config-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CalendarioComponent,
    GuardadosComponent,
    InicioComponent,
    NotasComponent,
    UsuarioComponent,
    ConfigUsuarioComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
