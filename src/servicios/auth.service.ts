import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

//login 
login(email: string, password: string) {
  this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
    localStorage.setItem('token', 'true');
    this.router.navigate(['/inicio']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/login']);
  });
}
  // registro
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Creaste tu cuenta con éxito')
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error(err);
        this.router.navigate(['/registro']);
      });
  }

//Cerrar sesión
logout() {
  this.fireauth.signOut().then(() => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }).catch(err => {
    alert(err.message);
  });
}

}