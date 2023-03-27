import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnDestroy, OnInit {


  ngOnInit(): void {
    console.log("OnInit");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
  index = 0;

  filterSearch = "";
  quieroEstiloDefault = true;
  quieroEstilo1 = false;
  quieroEstilo2 = false;
  desplegable = "";
  style1 = true;

  events: IEvent[] = [];

  orderDate(event:Event) {
    event.preventDefault(); // Cancelamos comportamiento por defecto ...
    this.filterSearch = "";
    this.events.sort((x, y) => new Date(x.fecha).getDate() - new Date(y.fecha).getDate());
  }
  orderPrice(event:Event) {
    event.preventDefault(); // Cancelamos comportamiento por defecto ...
    this.filterSearch = "";
    this.events.sort((x, y) => x.precio - y.precio);
  }
  /*
  addEvent(evento:IEvent) {
    this.events.push(evento);
  }*/


  changeBackground() {
    this.style1 = !this.style1;
  }
  changeBackground2() {
    this.quieroEstilo1 = !this.quieroEstilo1;
    this.quieroEstilo2 = !this.quieroEstilo2;
  }
  changeBackground3() {
    if (this.desplegable == "rojo") {
      this.quieroEstiloDefault = false;
      this.quieroEstilo1 = true;
      this.quieroEstilo2 = false;
    } else if (this.desplegable == "azul") {
      this.quieroEstiloDefault = false;
      this.quieroEstilo1 = false;
      this.quieroEstilo2 = true;
    } else {
      this.quieroEstiloDefault = true;
      this.quieroEstilo1 = false;
      this.quieroEstilo2 = false;
    }

  }
  borrar(evento: IEvent) {
    this.service.deleteEvento(evento.id).subscribe({
      next: resp => {
        this.events = this.events.filter(e => e != evento);
        console.log(resp);
      },
      error: e => console.log(e)
    })


  }

  constructor(private service: EventosService) {
    //this.events=this.service.getEventos();
    /*this.service.getEventos().subscribe(
      eventos=>this.events=eventos,
      error=>console.log(error),
      ()=>console.log("Accion completada")

    );*/
    this.service.getEventos().subscribe(
      eventos => {
        this.events = eventos
        console.log(eventos);

      });
    console.log(this.events);

  }


}
