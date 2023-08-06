import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule, //importo el modulo shared para que el modulo 'inicio' sepa de la existencia del modulo shared y poder usar el navbar o footer
  ]
})
export class InicioModule { }
