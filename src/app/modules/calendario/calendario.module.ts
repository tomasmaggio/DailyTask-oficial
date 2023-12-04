import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule
    
  ]
})
export class CalendarioModule { }