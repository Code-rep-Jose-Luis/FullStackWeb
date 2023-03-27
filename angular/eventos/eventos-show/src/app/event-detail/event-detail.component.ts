import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEvent = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    fecha: new Date('0')
  };
  anchuraImagen = 200;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: EventosService) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Recibimos parámetro
    console.log(id);
    this.service.getEvento(id)
      .subscribe({
        next: evento =>{if(evento!=null){
          this.event = evento
        }
      },
        error: r => {
          console.error(r);
          this.goBack();
        }
      });
  }


  goBack() {
    this.router.navigate(['/eventos']);
  }

}
