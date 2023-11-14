import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  mostrarBotones: boolean = false;

  toggleMostrarBotones() {
    this.mostrarBotones = !this.mostrarBotones;
  }

  editarImagen (){
    console.log("edicion funcionando")
  }
}
