import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notasmodal',
  templateUrl: './notasmodal.component.html',
  styleUrls: ['./notasmodal.component.css']
})
export class NotasmodalComponent implements OnInit {
  //modal
  @Input() showModal: boolean;
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  //creo el metodo
  onSubmit(form: NgForm){
    console.log(form)
  }

}
