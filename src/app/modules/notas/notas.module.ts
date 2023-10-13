import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './pages/notas/notas.component';
import { NotaindComponent } from './pages/notaind/notaind.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    NotasComponent,
    NotaindComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    SharedModule,
    SplitButtonModule,
    InputTextModule
  ]
})
export class NotasModule { }
