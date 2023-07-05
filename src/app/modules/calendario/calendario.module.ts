import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    

  
    PagesComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule
  ]
})
export class CalendarioModule { }
