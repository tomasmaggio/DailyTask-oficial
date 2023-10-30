import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida.component';


@NgModule({
  declarations: [BienvenidaComponent],
  imports: [
    CommonModule,
    BienvenidaRoutingModule,
    RouterModule
    
  ]
})
export class BienvenidaModule { }
