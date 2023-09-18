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
    contrasena: '',
  };

  constructor(public servicioAuth: AuthService) {}

  async registrarse() {
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena,
    };

    try {
      const res = await this.servicioAuth
        .registrar(credenciales.nombre, credenciales.contrasena);
      console.log('Registro exitoso:', res);
    } catch (error) {
      console.log('Error en el registro:', error);
    }
  }
}
