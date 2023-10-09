import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './pages/notas/notas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SplitButtonModule } from 'primeng/splitbutton';


@NgModule({
  declarations: [
    NotasComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    SharedModule,
    SplitButtonModule
  ]
})
export class NotasModule { }
