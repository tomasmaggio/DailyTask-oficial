import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    // email: '',
    contrasena: '',
    // rol: '',
  };

 

  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    }
  }

  constructor(public servicioAuth: AuthService) {}

   const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena).catch(error) => {console.log('error =>', error)}

  // console.log(res);
}
