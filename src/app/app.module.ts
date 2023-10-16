import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './modules/bienvenida/pages/bienvenida.component';
import { FullCalendarModule} from '@fullcalendar/angular'
import { FormsModule } from '@angular/forms';


 

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'bienvenida', component: BienvenidaComponent},
      {path:'', redirectTo: 'bienvenida', pathMatch: 'full'} //ruta vacía para redirigir a la pagina 'Bienvenida' en algun caso extraordinario
    ])
    
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }