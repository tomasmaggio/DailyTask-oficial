import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { PagesComponent } from './pages/pages.component';
import { NotasComponent } from './pages/notas/notas.component';


@NgModule({
  declarations: [
    PagesComponent,
    NotasComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule
  ]
})
export class NotasModule { }
