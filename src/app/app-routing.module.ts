/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: 'belatrix',
    component: HomeComponent,
    children: [
      {
        path: 'exchange-rate-module',
        loadChildren: './workflow/exchange-rate/exchange-rate.module#ExchangeRateModule'
      },
      {
        path: '', redirectTo: 'exchange-rate-module', pathMatch: "full"
      }
    ]
  },
  { path: '', redirectTo: '/belatrix', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

/* const routes: Routes = [
  { path: "navegacion", component: NavegacionComponent },
  {
    path: "articulo", children: [
      { path: "list", component: ArticuloListComponent },
      { path: "edit", component: ArticuloEditComponent },
      { path: "new", component: ArticuloNewComponent },
      { path: "", redirectTo: "list", pathMatch: "full" }
    ]
  },
  {
    path: "persona",
    loadChildren: "./persona/persona.module#PersonaModule"
  },
  {
    path: "seguridad",
    loadChildren: "./seguridad/seguridad.module#SeguridadModule"
  },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNoFoundComponent },

]; */
