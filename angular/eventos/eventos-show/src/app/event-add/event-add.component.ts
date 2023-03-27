import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  ngOnInit(): void {
    this.inicializarEvento();
  }

  newEvent!: IEvent;

  inicializarEvento() {
    this.newEvent = {
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      precio: 0,
      fecha: new Date('')
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
      this.newEvent.imagen = reader.result as string;
    });
  }

  @Output() addEvent = new EventEmitter<IEvent>();
  addEvento() {
    this.service.addEvento(this.newEvent)
      .subscribe({
        next: respu => {
          this.addEvent.emit(this.newEvent);
          this.inicializarEvento();
          console.log(respu);
        },
        error: e => console.log(e)
      })

  }
  constructor(private service: EventosService) { }
}
