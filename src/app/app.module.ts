import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './modules/bienvenida/pages/bienvenida.component';
import { FullCalendarModule} from '@fullcalendar/angular'


 

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    RouterModule
    
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }