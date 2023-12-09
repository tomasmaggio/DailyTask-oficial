import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from './notas.service';
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

  obtenerNotas(){
    this.notasService.obtenerNotas().subscribe((res: Notas[]) =>{
      console.log(res);
      this.notas = res;
    })
  }

  borrarNota(nota: Notas){
    let decision = confirm('¿Está seguro de querer borrar esta nota?')
  
    if (decision === true){
      this.notasService.borrarNota(nota);

      }
    }

    obtenerDetalles(nota: Notas){
      this.notaDetalles = nota
      console.log(this.notaDetalles)
    }
  
    editarNota(nota: Notas){
      const {value} = this.editarForm;
      console.log(value)
   
      this.notaObj.id = nota.id;
      this.notaObj.title = value.titulo_editado;
      this.notaObj.description = value.descripcion_editada;
    
    
      this.notasService.editarNota(nota, this.notaObj).then(() => {
        this.editarForm.reset();
        // Cerrar el modal
        $('#EditarNotaModal').modal('hide');
      });
    }
  
  }
