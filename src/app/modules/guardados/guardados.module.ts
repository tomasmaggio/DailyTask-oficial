import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardadosRoutingModule } from './guardados-routing.module';
import { PagesComponent } from './pages/pages.component';




@NgModule({
  declarations: [
    

  
    PagesComponent
  ],
  imports: [
    CommonModule,
    GuardadosRoutingModule
  ]
})
export class GuardadosModule { }
