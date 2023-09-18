import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { FormsModule } from '@angular/forms';

//Importaciones de Firebase
import { enviroments } from 'src/enviroments/enviroments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule,



    //Angular
    AngularFireModule.initializeApp(enviroments.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,


  ]
})
export class AuthModule { }

