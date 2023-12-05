import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/servicios/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  mostrarBotones: boolean = false;
  username : string = '';

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        console.log('ID del usuario:', userId); // Imprime el ID del usuario en la consola
        this.authService.getUsername(userId).subscribe(username => {
          this.username = username;
        });
      }
    });
  }

  toggleMostrarBotones() {
    this.mostrarBotones = !this.mostrarBotones;
  }

  editarImagen (){
    console.log("edicion funcionando")
  }
}
