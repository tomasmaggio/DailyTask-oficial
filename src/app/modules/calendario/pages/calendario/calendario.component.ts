import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
//aqui se importan los plugins del fullcalendar (primero hay que instalarlos https://fullcalendar.io/docs/plugin-index)
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import format from 'date-fns/format';
import esLocale from '@fullcalendar/core/locales/es';
import es from 'date-fns/locale/es';
import { BrowserModule } from '@angular/platform-browser';
import { Calendar } from '@fullcalendar/core';

function obtenerAbreviaturaDia(fecha: Date): string {
  const dias = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  return dias[fecha.getDay()];
}


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  @ViewChild('fullcalendar') fullcalendar!: CalendarioComponent;

  events: any[] = [
    {
      title: 'Corte de pelo de panchito 🐶',
      start: '2023-11-07',
      color: '#1967D2',
    },
    {
       title: 'Clases de Alemán',
       start: '2023-11-08',
       color: '#F72A25'
    },
    {
      title: 'Llevar el carro al mecánico',
      start: '2023-11-09',
      color: '#0b5394'
   },
   {
    title: 'Corte de pelo de panchito 🐶',
    start: '2023-11-07',
    color: '#1967D2',
  },
  {
     title: 'Clases de Alemán',
     start: '2023-11-08',
     color: '#F72A25'
  },
  {
    title: 'Llevar el carro al mecánico',
    start: '2023-11-09',
    color: '#0b5394'
 },
 {
  title: 'Corte de pelo de panchito 🐶',
  start: '2023-11-07',
  color: '#1967D2',
},
{
   title: 'Clases de Alemán',
   start: '2023-11-08',
   color: '#F72A25'
},
{
  title: 'Llevar el carro al mecánico',
  start: '2023-11-09',
  color: '#0b5394'
},
{
  title: 'Corte de pelo de panchito 🐶',
  start: '2023-11-07',
  color: '#1967D2',
},
{
   title: 'Clases de Alemán',
   start: '2023-11-08',
   color: '#F72A25'
},
{
  title: 'Llevar el carro al mecánico',
  start: '2023-11-09',
  color: '#0b5394'
},
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
           console.log(titulo);
       })

      
     },

  
    //Drag & Drop
    editable: true, //permite hacer los eventos editables (true)
    eventStartEditable: true,
    eventDrop: (info) => {
      // código para actualizar fecha en BD
    },

    eventMouseEnter: this.handleEventMouseEnter.bind(this),
    eventMouseLeave: this.handleEventMouseLeave.bind(this),
    
    events: this.events
  
  };


//Funcion para mostrar el Tooltip cada que se le pasa el cursor por encima de un evento en en el calendario
  handleEventMouseEnter(info: any): void {
    const eventColor = info.event.backgroundColor || info.event.borderColor || '';
      // Formatear la fecha en el formato deseado con la abreviatura del día
    const formattedDate = info.event.start
    ? format(new Date(info.event.start), "'- 'EEE dd LLL - h:mm a", { locale: es })
    : '';

    const tooltip = `<div class="calendarTooltip" style="
    padding-left:10px; 
    text-align: start;
    padding: 4px;
    padding-inline: 50px;
    width:auto;
    height:auto;
    background:${eventColor};
    border-radius: 4px; 
    color: white; 
    position:absolute;
    z-index:10001;">
    ${info.event.title} ${formattedDate}</div>`;
    
    const $tool = $(tooltip).appendTo('body');

    $(info.el).mouseover(function (e) {
      $(this).css('z-index', 10000);
      $tool.fadeIn('1000');
      $tool.fadeTo(10, 1.9);
    
      
    
    }).mousemove(function (e) {
      $tool.css('top', e.pageY + 10);
      $tool.css('left', e.pageX + 20);
    });

    
  }

  handleEventMouseLeave(info: any): void {
    $(info.el).css('z-index', 8);
    $('.calendarTooltip').remove();
  }
  
  
}
