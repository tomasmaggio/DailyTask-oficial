import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
//aqui se importan los plugins del fullcalendar (primero hay que instalarlos https://fullcalendar.io/docs/plugin-index)
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Calendar } from '@fullcalendar/core';




@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  

  events: any[] = [
    {
      title: 'Corte de pelo de panchito',
      start: '2023-11-07',
      color: '#1967D2'
    },
    {
       title: 'Clases de Alemán',
       start: '2023-11-08',
       color: '#F72A25'
    },
    {
       title: 'Yoga',
       start: '2023-11-12',
       color:'#FBBC04'
    },
    {
      title: 'Yoga',
      start: '2023-11-29',
      color:'#FBBC04'
   },
   {
    title: 'Yoga',
    start: '2023-11-05',
    color:'#FBBC04'
  },
  {
    title: 'Yoga',
    start: '2023-11-19',
    color:'#FBBC04'
  },
  {
    title: 'Yoga',
    start: '2023-11-26',
    color:'#FBBC04'
  },
    {
      title: 'Cumpleaños de juan',
      start: '2023-11-29',
      color:'#1967D2'
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
    select: function(arg){
      $('#ejemploModal').modal('toggle');


      $('#guardarbtn').click(function(){
          var titulo = $('titulo').val();
          console.log('titulo');
      })

      
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