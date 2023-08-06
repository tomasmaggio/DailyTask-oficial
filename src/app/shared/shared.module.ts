import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
  
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterLink
  ],

  exports:[
    NavbarComponent, //indico cuales son los componentes que permito exportar a otros componentes
    FooterComponent,
  ]
  
})
export class SharedModule {}

