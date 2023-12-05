import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // Método para realizar el inicio de sesión
  login(email: string, password: string) {
    // Utilizamos el servicio AngularFireAuth para autenticar al usuario
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      // Si el inicio de sesión es exitoso, guardamos un token en el localStorage
      localStorage.setItem('token', 'true');
      // Redirigimos al usuario a la página de inicio
      this.router.navigate(['/inicio']);
    }, err => {
      // Si ocurre un error, mostramos una alerta y redirigimos al usuario a la página de inicio de sesión
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }

  // Método para realizar el registro de un nuevo usuario
  register(username: email: string, password: string) {
    // Utilizamos el servicio AngularFireAuth para crear un nuevo usuario en Firebase
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Si el registro es exitoso, mostramos una alerta y redirigimos al usuario a la página de inicio de sesión
        alert('Creaste tu cuenta con éxito');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        // Si ocurre un error, mostramos un mensaje de error en la consola y redirigimos al usuario a la página de registro
        console.error(err);
        this.router.navigate(['/registro']);
      });
  }

  // Método para cerrar la sesión del usuario actual
  logout() {
    // Utilizamos el servicio AngularFireAuth para cerrar la sesión
    this.fireauth.signOut().then(() => {
      // Si el cierre de sesión es exitoso, eliminamos el token del localStorage
      localStorage.removeItem('token');
      // Redirigimos al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
    }).catch(err => {
      // Si ocurre un error, mostramos una alerta con el mensaje de error
      alert(err.message);
    });
  }

}