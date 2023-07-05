import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { PagesComponent } from './pages/pages.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';



@NgModule({
  declarations: [
    

  
    PagesComponent,
             CalendarioComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule
  ]
})
export class CalendarioModule { }
