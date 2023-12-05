import { Component } from '@angular/core';
import { AuthService } from 'src/servicios/auth.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  login() {
    if (this.email == '') {
      alert('Por favor ingrese un email válido.');
      return;
    }

    if (this.password == '') {
      alert('Por favor ingrese una contraseña válida');
      return;
    } // Lógica adicional para realizar el inicio de sesión

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  
}
