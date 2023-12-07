import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

//importaciones y decoradores
import { Injectable } from '@angular/core'; //decorador que indica que el servicio puede ser inyectado en otros componentes o servicios
import { AngularFireAuth } from '@angular/fire/compat/auth'; //servicio de angularfire para interactuar con la autentificación de firebase
import { Route, Router } from '@angular/router'; //servicio de enrutamiento de Angular para navegar entre diferentes rutas
import { FormsModule } from '@angular/forms'; //FormsModule lo tenemos para usar en NgModel

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) { }


  getUsername(userId: string): Observable<string> {
    return this.firestore
      .collection('users')
      .doc(userId)
      .valueChanges()
      .pipe(
        map((user: any) => user.username)
      );
  }
  
  // Método para realizar el inicio de sesión
  constructor(private fireauth: AngularFireAuth, private router: Router) { } //Se inyectan los servicios AngularFireAuth y Router en el constructor del servicio.

  // Método para realizar el inicio de sesión con correo y contraseña
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
  register(username: string, email: string, password: string) {
    // Utilizamos el servicio AngularFireAuth para crear un nuevo usuario en Firebase
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Si el registro es exitoso, mostramos una alerta y redirigimos al usuario a la página de inicio de sesión
        return this.firestore.collection('users').doc(userCredential.user?.uid).set({
          username: username,
          email: email
        });

  // Método para realizar el registro de un nuevo usuario con correo y contraseña
  register(email: string, password: string) {
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