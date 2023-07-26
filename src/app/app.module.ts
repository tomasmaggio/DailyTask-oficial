import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { BienvenidaComponent } from './modules/bienvenida/bienvenida.component';




@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    BienvenidaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'inicio', component: InicioComponent},
      {path:'', redirectTo: 'inicio', pathMatch: 'full'}
    ])
    
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
