import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    SharedModule,
    FullCalendarModule
  ]
})
export class CalendarioModule { }