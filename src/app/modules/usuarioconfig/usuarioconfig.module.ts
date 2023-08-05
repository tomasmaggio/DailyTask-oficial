import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioconfigRoutingModule } from './usuarioconfig-routing.module';
import { UsuarioconfigComponent } from './pages/usuarioconfig/usuarioconfig.component';


@NgModule({
  declarations: [
    UsuarioconfigComponent
  ],
  imports: [
    CommonModule,
    UsuarioconfigRoutingModule
  ]
})
export class UsuarioconfigModule { }
