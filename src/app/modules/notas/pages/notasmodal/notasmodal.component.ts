import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notasmodal',
  templateUrl: './notasmodal.component.html',
  styleUrls: ['./notasmodal.component.css']
})
export class NotasmodalComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() onClose = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
