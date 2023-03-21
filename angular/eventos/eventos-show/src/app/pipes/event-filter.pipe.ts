import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(event: IEvent[], filter: string): IEvent[] {
    const filterDef = filter ? filter.toLocaleLowerCase() : null;
    return filterDef ? event.filter(e => e.description.toLocaleLowerCase().includes(filterDef)) : event;
    /*return event.filter(e => e.description.toLocaleLowerCase()
      .includes(filter ? filter.toLocaleLowerCase() : "") ||
      e.title.toLocaleLowerCase()
        .includes(filter ? filter.toLocaleLowerCase() : ""));
    */
      }

}
