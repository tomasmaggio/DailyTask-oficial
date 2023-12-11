import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {
    // Inyectamos el servicio AuthService en el constructor del componente
  }

  // Método para validar el formato del correo electrónico
  validateEmail(email: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  // Método para realizar el inicio de sesión
  login() {
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

    // Llamamos al método de inicio de sesión del AuthService, pasando el correo electrónico y la contraseña
    this.auth.login(this.email, this.password);

    // Reiniciamos los valores de email y password
    this.email = '';
    this.password = '';
  }
}