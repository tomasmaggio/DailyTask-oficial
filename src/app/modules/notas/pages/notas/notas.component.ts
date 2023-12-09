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
  notas: any[]
  notaObj: Notas = {
    id: '',
    title: '',
    description: '',
  }

  constructor(private notasService: NotasService, private formBuilder: FormBuilder) { 
    this.notaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
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
      alert("Nota agregada con éxito");
      this.notaForm.reset();
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
  
    editarNota(nota: Notas){
      
    }
  
  }
