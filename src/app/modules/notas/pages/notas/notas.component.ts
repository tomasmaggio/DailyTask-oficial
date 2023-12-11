import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from '../../services/notas.service';
import { Notas } from 'src/app/models/notas';




@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit {

  notaForm!: FormGroup
  editarForm!: FormGroup
  notaDetalles: any

  notas: any[]
  notaObj: Notas = {
    id: '',
    title: '',
    description: '',
  }

  constructor(private notasService: NotasService, private formBuilder: FormBuilder) {
    //Creación de nota
    this.notaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    //EDITAR
    this.editarForm = this.formBuilder.group({
      titulo_editado: ['', Validators.required],
      descripcion_editada: ['', Validators.required]
    })

  }
  ngOnInit(): void {
    this.obtenerNotas()
  }

  agregarNota() {
    const { value } = this.notaForm;
    console.log(value);

    this.notaObj.id = '';
    this.notaObj.title = value.titulo;
    this.notaObj.description = value.descripcion;

    this.notasService.agregarNota(this.notaObj).then(() => {
      this.notaForm.reset();
      // Cerrar el modal
      $('#Agregarnota').modal('hide');
    });
  }

  // Método para obtener las notas desde el servicio
  obtenerNotas() {
    // Llamar al servicio de notas para obtener todas las notas
    this.notasService.obtenerNotas().subscribe((res: Notas[]) => {
      // Imprimir las notas en la consola (para propósitos de depuración)
      console.log(res);

      // Asignar las notas obtenidas a la propiedad 'notas' del componente
      this.notas = res;
    });
  }

  // Método para borrar una nota después de confirmar la acción
  borrarNota(nota: Notas) {
    // Solicitar confirmación al usuario antes de proceder con el borrado
    let decision = confirm('¿Está seguro de querer borrar esta nota?');

    // Verificar la decisión del usuario
    if (decision === true) {
      // Llamar al servicio de notas para borrar la nota
      this.notasService.borrarNota(nota);
    }
  }

  obtenerDetalles(nota: Notas) {
    this.notaDetalles = nota
    console.log(this.notaDetalles)
  }

  // Método para editar una nota después de confirmar la acción
  editarNota(nota: Notas) {
    // Obtener los valores del formulario de edición
    const { value } = this.editarForm;
    console.log(value);

    // Configurar el objeto 'notaObj' con los nuevos valores
    this.notaObj.id = nota.id;
    this.notaObj.title = value.titulo_editado;
    this.notaObj.description = value.descripcion_editada;

    // Llamar al servicio de notas para realizar la edición
    this.notasService.editarNota(nota, this.notaObj).then(() => {
      // Reiniciar el formulario de edición
      this.editarForm.reset();
      // Cerrar el modal de edición
      $('#EditarNotaModal').modal('hide');
    });
  }

}
