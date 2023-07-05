import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ConfigUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
