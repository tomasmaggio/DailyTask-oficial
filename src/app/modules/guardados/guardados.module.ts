import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardadosRoutingModule } from './guardados-routing.module';
import { PagesComponent } from './pages/pages.component';
import { GuardadosComponent } from './pages/guardados/guardados.component';




@NgModule({
  declarations: [
    

  
    PagesComponent,
             GuardadosComponent
  ],
  imports: [
    CommonModule,
    GuardadosRoutingModule
  ]
})
export class GuardadosModule { }
