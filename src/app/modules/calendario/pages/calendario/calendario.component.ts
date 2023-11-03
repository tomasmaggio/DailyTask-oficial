import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
//aqui se importan los plugins del fullcalendar (primero hay que instalarlos https://fullcalendar.io/docs/plugin-index)
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  

  events: any[] = [
    {
      title: 'Corte de pelo de panchito',
      start: '2023-09-07'
    },
    {
       title: 'Clases de Alemán',
       start: '2023-09-08'
    },
    {
       title: 'Yoga',
       start: '2023-09-12'
    },
    {
      title: 'Yoga',
      start: '2023-08-29'
   },
   {
    title: 'Yoga',
    start: '2023-09-05'
  },
  {
    title: 'Yoga',
    start: '2023-09-19'
  },
  {
    title: 'Yoga',
    start: '2023-09-26'
  },
    {
      title: 'Cumpleaños de juan',
      start: '2023-09-29'
   }  
  ];

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    
    //idioma
    locale: esLocale,

    //seleccionar fechas (varias fechas) (no sirve para seleccionar o mover eventos)
    selectable: true, 

    //deseleccionar fechas automaticamente
    unselectAuto: true,

    //funcion para abrir el modal
    select: function(arg) {
      // Este es un controlador de eventos que se ejecuta cuando se selecciona algo en FullCalendar (una fecha).
  
      // Abre el modal con el id "ejemploModal" utilizando jQuery.
      $('#ejemploModal').modal('toggle');
  
      // Agrega un controlador de eventos para el evento 'click' en el elemento con id "guardarbtn".
      $('#guardarbtn').on('click', function() {
          // Obtiene el valor del campo de entrada con id "titulo" y lo almacena en la variable "titulo".
          var titulo = $('#titulo').val();
  
          // Muestra el valor del campo "titulo" en la consola.
          console.log(titulo);
      });
  },

    


    //Drag & Drop
    editable: true, //permite hacer los eventos editables (true)
    eventStartEditable: true,
    eventDrop: (info) => {
      // código para actualizar fecha en BD
    },
    
    events: this.events
  
  };
  
  
}