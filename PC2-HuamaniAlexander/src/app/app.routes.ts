import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Registro } from './pages/registro/registro';
import { Alumnos } from './pages/alumnos/alumnos';
import { Ejercicio1 } from './pages/ejercicio1/ejercicio1';
import { Ejercicio2 } from './pages/ejercicio2/ejercicio2';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'registro', component: Registro },
  { path: 'alumnos', component: Alumnos },
  { path: 'pregunta1', component: Ejercicio1 },
  { path: 'pregunta2', component: Ejercicio2 },
  { path: '**', redirectTo: 'inicio' }
];