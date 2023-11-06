import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalComponent } from './components/modal/modal.component';

import * as bootstrap from "bootstrap";
import * as $ from 'jquery';



@NgModule({
  declarations: [
    CalendarioComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    SharedModule,
    FullCalendarModule,
    
  ]
})
export class CalendarioModule { }