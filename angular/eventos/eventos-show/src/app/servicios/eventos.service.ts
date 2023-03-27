import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  //private productURL="http://localhost:8080/api/eventos";
  private productURL="api/eventos";
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
      mensaje?:string,
      error?:string
    }>(this.productURL)
    .pipe(map(response=>response.eventos));

  }
  /*getEventos():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this.productURL) //recibe directamente los valores de entrada como una array
    .pipe(map(response=>response));
  }*/

  /*addEvento(evento: IEvent): Observable<IEvent> {
    return this.http.post<{evento:IEvent,mensaje:string,error?:string}>(this.productURL,evento)
    .pipe(map(response=>response.evento))
  }*/

  addEvento(evento: IEvent): Observable<IEvent> {
    return this.http.post<{evento:IEvent,mensaje:string,error?:string}>(this.productURL,evento)
    .pipe(map(response=>response.evento))
  }


  /*deleteEvento(id:number): Observable<number> {
    return this.http.delete<{evento:number,ok:boolean,error?:string}>(this.productURL+"/"+id)
    .pipe(map(response=>response.evento))
  }*/

  deleteEvento(id:number): Observable<number> {
    return this.http.delete<{evento:number,ok:boolean,error?:string}>(this.productURL+"/"+id)
    .pipe(map(response=>response.evento))
  }

}
