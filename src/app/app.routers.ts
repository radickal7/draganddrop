
import { RouterModule, Routes } from '@angular/router';

import { ComprasComponent } from "./components/compras/compras.component";
import { HomeComponent } from "./components/home/home.component";

const app_routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'compras', component: ComprasComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
