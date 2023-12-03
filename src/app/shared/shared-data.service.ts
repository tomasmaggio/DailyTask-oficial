import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private eventSource = new Subject<any>(); //eventSource se utiliza para emitir eventos a otros componentes.
  private editedEventSource = new Subject<any>();


  editedEvent$ = this.editedEventSource.asObservable();
  event$ = this.eventSource.asObservable(); //Aquí se crea un Observable llamado event$ a partir del Subject (eventSource). 
  //                                          El $ al final del nombre de la variable es una convención que indica que es un Observable.

  sendEvent(event: any) { //sendEvent es un método que toma un evento como parámetro y lo emite utilizando el Subject.
    this.eventSource.next(event); //Al llamar a next en eventSource, estás notificando a todos los suscriptores (observadores) que hay un nuevo evento disponible.
  }

  sendEditedEvent(event: any) {
    this.editedEventSource.next(event);
  }



  //metodo para agregar eventos en el calendario
  addEvent(event:any){ //addEvent llama a sendEvent para agregar eventos al servicio
    this.sendEvent(event);
  }

  // Método para agregar eventos editados al calendario
  editEvent(event: any) {
    this.sendEditedEvent(event);
  }

  
}
