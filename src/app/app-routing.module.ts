import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PlanetsViewComponent} from "./views/planets-view/planets-view.component";
import {StationsViewComponent} from "./views/stations-view/stations-view.component";
import {CargoesViewComponent} from "./views/cargoes-view/cargoes-view.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'planets', component: PlanetsViewComponent},
  {path: 'stations', component: StationsViewComponent},
  {path: 'cargoes', component: CargoesViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
