import { Component,Input,Output,EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
@Input() event!:IEvent;
@Input() quieroEstilo1!:boolean;
@Input() quieroEstilo2!:boolean;
@Input() quieroEstiloDefault!:boolean;
anchuraImagen = 200;

@Output() deleteEvent=new EventEmitter<void>();
delete() {
  this.deleteEvent.emit();
}


}
