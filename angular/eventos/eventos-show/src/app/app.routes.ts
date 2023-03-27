import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventAddComponent } from './event-add/event-add.component';
export const APP_ROUTES: Route[] = [
{ path: 'welcome', component: WelcomeComponent },
{ path: 'eventos', component: EventListComponent },
// :id es un parámetro (id del producto)
{ path: 'eventos/add', component: EventAddComponent },
{ path: 'eventos/add/:id', component: EventAddComponent  },
{ path: 'eventos/:id', component: EventDetailComponent  },
// Ruta por defecto (vacía) -> Redirigir a /welcome
{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
// Ruta que no coincide con ninguna de las anteriores
{ path: '**'
, redirectTo: '/welcome', pathMatch: 'full' }
];
