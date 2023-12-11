import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) { }

  getUsername(userId: string): Observable<string> {
    // Retorna un observable que representa el nombre de usuario asociado al ID de usuario proporcionado
    return this.firestore
      .collection('users') // Accede a la colección 'users' en Firestore
      .doc(userId) // Accede al documento específico correspondiente al ID de usuario
      .valueChanges() // Observa los cambios en los valores del documento
      .pipe(map((user: any) => user.username)); // Utiliza el operador map para extraer el nombre de usuario del objeto del documento
  }

  login(email: string, password: string) {
    // Intenta iniciar sesión con el correo electrónico y la contraseña proporcionados utilizando Firebase Authentication
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      // Si el inicio de sesión es exitoso, establece un indicador de autenticación en el almacenamiento local y redirige al usuario a la página de inicio
      localStorage.setItem('token', 'true');
      this.router.navigate(['/inicio']);
    }, err => {
      // Si hay un error durante el inicio de sesión, muestra un mensaje de error al usuario y lo redirige nuevamente a la página de inicio de sesión
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }
  

  register(username: string, email: string, password: string) {
    // Intenta crear un nuevo usuario en Firebase Authentication con el correo electrónico y la contraseña proporcionados
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Si el registro es exitoso, guarda la información adicional del usuario en la colección 'users' en Firestore
        return this.firestore.collection('users').doc(userCredential.user?.uid).set({
          username: username,
          email: email
        });
      })
      .catch((err) => {
        // Si hay un error durante el registro, muestra un mensaje de error en la consola y redirige al usuario a la página de registro
        console.error(err);
        this.router.navigate(['/registro']);
      });
  }

  logout() {
    // Llamada al método signOut de AngularFireAuth para cerrar la sesión del usuario
    this.fireauth.signOut().then(() => {
      // Limpiar el token almacenado en el localStorage
      localStorage.removeItem('token');
      // Redirigir al usuario a la página de inicio de sesión ('/login') después de cerrar sesión
      this.router.navigate(['/login']);
    }).catch(err => {
      // Manejar cualquier error que pueda ocurrir durante el cierre de sesión
      alert(err.message);
    });
  }
}