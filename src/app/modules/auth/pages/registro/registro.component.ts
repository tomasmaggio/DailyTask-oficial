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

  constructor(private auth : AuthService){
    
  }

  ngOnInit(): void {

  }

  validateEmail(email: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  register() {
    if (!this.validateEmail(this.email)) {
      alert('Por favor ingrese un email válido.');
      return;
    }


    if (this.password == '') {
      alert('Por favor ingrese una contraseña válida');
      return;
    } // Lógica adicional para realizar el inicio de sesión

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
