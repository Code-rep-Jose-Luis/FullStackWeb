import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  ngOnInit(): void {
    this.inicializarEvento();
  }

  newEvent!:IEvent;

  inicializarEvento(){
    this.newEvent = {
      id:0,
      title: '',
      description: '',
      image: '',
      price: 0,
      date: new Date('')
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      //this.newEvent.image = (reader.result!=null)?reader.result.toString():"";
      this.newEvent.image = reader.result as string;
    });
  }

  @Output() addEvent=new EventEmitter<IEvent>();
  addEvento() {
  this.addEvent.emit(this.newEvent);
  this.inicializarEvento();
  }

}
