import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  index=0;
  anchuraImagen=200;
  events:IEvent[] = [{
    title: "1",
    description: 'SSD hard drive',
    date:'2016-10-03',
    price: 75,
    image: 'assets/ssd.jpg',
    },
    {
    title: "2",
    description: 'LGA1151 Motherboard',
    date: '2016-09-15',
    price: 96.95,
    image: 'assets/motherboard.jpg',
    },
    {
      title: "3",
      description: 'LGA1151 Motherboard',
      date: '2016-09-15',
      price: 96.95,
      image: 'assets/motherboard.jpg',
      },
      {
        title: "4",
        description: 'LGA1151 Motherboard',
        date: '2016-09-15',
        price: 96.95,
        image: 'assets/motherboard.jpg',
        }];

}
