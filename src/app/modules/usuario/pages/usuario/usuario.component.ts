import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/servicios/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  mostrarBotones: boolean = false;
  username: string = '';
  descripcion: string = '';
  descripcioneditada: string = '';
  textoOriginal: string = '';

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        const userId = (await user)?.uid;
        console.log('ID del usuario:', userId);
        this.authService.getUsername(userId).subscribe((username) => {
          this.username = username;
        });

        this.firestore
          .collection('users')
          .doc(userId)
          .valueChanges()
          .subscribe((data: any) => {
            this.descripcion = data?.descripcion || '';
            this.descripcioneditada = this.descripcion;
            this.textoOriginal = this.descripcion;
          });
      }
    });
  }

  toggleMostrarBotones() {
    this.mostrarBotones = !this.mostrarBotones;
  }

  editarDescripcion() {
    this.mostrarBotones = true;
  }

  async guardarCambios() {
    this.descripcion = this.descripcioneditada;
    const user = await this.afAuth.currentUser;
    const userId = user?.uid;
    if (userId) {
      this.firestore.collection('users').doc(userId).update({
        descripcion: this.descripcion,
      });
    }
    this.mostrarBotones = false;
    this.textoOriginal = this.descripcion;
  }

  descartarCambios() {
    this.descripcioneditada = this.textoOriginal;
    this.mostrarBotones = false;
  }
}
