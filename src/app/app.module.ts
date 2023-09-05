import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { BienvenidaComponent } from './modules/bienvenida/pages/bienvenida.component';

//Navbar y footer
import { SharedModule } from './shared/shared.module';


//Importaciones de firebase
import { enviroments } from 'src/enviroments/enviroments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    //Angular
    AngularFireModule.initializeApp(enviroments.firebaseConfig), //Inicializar Firebase
    AngularFireAuthModule,
    SharedModule,  
    
    
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
