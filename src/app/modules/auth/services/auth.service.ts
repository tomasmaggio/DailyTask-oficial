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
    return this.firestore
      .collection('users')
      .doc(userId)
      .valueChanges()
      .pipe(map((user: any) => user.username));
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/inicio']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }

  register(username: string, email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return this.firestore.collection('users').doc(userCredential.user?.uid).set({
          username: username,
          email: email
        });
      })
      .catch((err) => {
        console.error(err);
        this.router.navigate(['/registro']);
      });
      this.router.navigate(['/login']);
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }).catch(err => {
      alert(err.message);
    });
  }
}