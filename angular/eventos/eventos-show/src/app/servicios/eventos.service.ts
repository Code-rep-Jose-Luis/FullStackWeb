import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private productURL="http://curso.i234.me:8080/eventos";
  constructor(private http: HttpClient){}

  /*getEventos(){
    return[{
      id:1,
      title: "1",
      description: 'SSD hard drive',
      date: new Date('2016-10-03'),
      price: 75,
      image: 'assets/ssd.jpg',
    },
    {
      id:2,
      title: "2",
      description: 'LGA1151 Motherboard',
      date: new Date('2016-09-15'),
      price: 96.95,
      image: 'assets/motherboard.jpg',
    },
    {
      id:3,
      title: "3",
      description: 'LGA1151 Motherboard',
      date: new Date('2016-09-15'),
      price: 96.95,
      image: 'assets/motherboard.jpg',
    },
    {
      id:4,
      title: "4",
      description: 'LGA1151 Motherboard',
      date: new Date('2016-09-15'),
      price: 96.95,
      image: 'assets/motherboard.jpg',
    }]
  }*/
  getEventos():Observable<IEvent[]>{
    return this.http.get<{
      eventos:IEvent[],
      ok:boolean,
      errores?:string
    }>(this.productURL)
    .pipe(map(response=>response.eventos));

  }
}
