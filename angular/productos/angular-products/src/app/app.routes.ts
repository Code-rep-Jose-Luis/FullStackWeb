import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
export const APP_ROUTES: Route[] = [
{ path: 'welcome', component: WelcomeComponent },
{ path: 'products', component: ProductListComponent },
// :id es un parámetro (id del producto)
{ path: 'products/:id', component: ProductoDetalleComponent },
// Ruta por defecto (vacía) -> Redirigir a /welcome
{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
// Ruta que no coincide con ninguna de las anteriores
{ path: '**'
, redirectTo: '/welcome', pathMatch: 'full' }
];
