import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notaind',
  templateUrl: './notaind.component.html',
  styleUrls: ['./notaind.component.css']
})
export class NotaindComponent implements AfterViewInit {

  expanded: boolean = true; //nota inicialmente no expandida

  @Input() titulo: string;
  @Input() contenido: string;
  @Input() link: string;

  @Output('eliminar') eliminarEvento: EventEmitter<void> = new EventEmitter<void>(); //defino la palabra 'eliminar' para permitir al componente principal vincularse 
                                                                                     //con el evento usando la palabra 'eliminar' enves de 'eliminarEvento'
  @ViewChild('desvanecer') desvanecer!: ElementRef<HTMLElement>;
  @ViewChild('notaContenido') notaContenido!: ElementRef<HTMLElement>;

  @Output() editar: EventEmitter<number> = new EventEmitter<number>();


  enBotonEditarClick() {
    this.editar.emit();
  }
  
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.actualizarDesvanecimiento();
  }

  toggleExpanding() {
    this.expanded = !this.expanded;
  }

  private actualizarDesvanecimiento() {
    const style = window.getComputedStyle(this.notaContenido.nativeElement, null);
    const viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.notaContenido.nativeElement.scrollHeight > viewableHeight) {
      // Si hay texto de más, mostrar el desvanecimiento
      this.renderer.setStyle(this.desvanecer.nativeElement, 'display', 'block');
    } else {
      // Si no hay texto de más, quitar el desvanecimiento
      this.renderer.setStyle(this.desvanecer.nativeElement, 'display', 'none');
    }
  }


  enBotonXClick() {
    this.eliminarEvento.emit();
  }



}
