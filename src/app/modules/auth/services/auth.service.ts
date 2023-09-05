import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciamos auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  registrar(nombre: string, contrasena: string){
    //Retorna nuevo valor de usuario y contraseña.
    return this.auth.createUserWithEmailAndPassword(nombre, contrasena)
  
  }

}
