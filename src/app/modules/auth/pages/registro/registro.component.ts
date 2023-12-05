import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: any;
  password: string;

  constructor(private auth: AuthService) {
    // Inyectamos el servicio AuthService en el constructor del componente
  }

  ngOnInit(): void {
    // Método del ciclo de vida del componente ngOnInit
  }

  // Método para validar el formato del correo electrónico
  validateEmail(email: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  // Método para registrar un nuevo usuario
  register() {
    // Validamos el formato del correo electrónico
    if (!this.validateEmail(this.email)) {
      alert('Por favor ingrese un email válido.');
      return;
    }

    // Validamos que se haya ingresado una contraseña
    if (this.password == '') {
      alert('Por favor ingrese una contraseña válida');
      return;
    }

    // Llamamos al método de registro del AuthService, pasando el correo electrónico y la contraseña
    this.auth.register(this.email, this.password);

    // Reiniciamos los valores de email y password
    this.email = '';
    this.password = '';
  }
}