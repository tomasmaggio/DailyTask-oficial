import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardadosRoutingModule } from './guardados-routing.module';
import { GuardadosComponent } from './pages/guardados/guardados.component';




@NgModule({
  declarations: [
    
  GuardadosComponent

  ],
  imports: [
    CommonModule,
    GuardadosRoutingModule
  ]
})
export class GuardadosModule { }
