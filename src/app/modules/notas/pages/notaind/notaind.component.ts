import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-notaind',
  templateUrl: './notaind.component.html',
  styleUrls: ['./notaind.component.css']
})
export class NotaindComponent implements AfterViewInit {

  @Input() titulo: string;
  @Input() contenido: string;
  @Input() link: string;

  @ViewChild('desvanecer') desvanecer!: ElementRef<HTMLElement>;
  @ViewChild('notaContenido') notaContenido!: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.actualizarDesvanecimiento();
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
}
