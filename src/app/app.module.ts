import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PlanetsViewComponent } from './views/planets-view/planets-view.component';
import { ApiService } from "./services/api.service";
import { PlanetsComponent } from './components/Planets/planets/planets.component';
import { PlanetComponent } from './components/Planets/planet/planet.component';
import { FormsModule } from "@angular/forms";
import { AddPlanetFormComponent } from './components/Planets/add-planet-form/add-planet-form.component';
import { ErrorFormComponent } from './components/error-form/error-form.component';
import { AddStationFormComponent } from './components/Stations/add-station-form/add-station-form.component';
import { StationComponent } from './components/Stations/station/station.component';
import { StationsComponent } from './components/Stations/stations/stations.component';
import { StationsViewComponent } from './views/stations-view/stations-view.component';
import { CargoComponent } from './components/Cargoes/cargo/cargo.component';
import { CargoesComponent } from './components/Cargoes/cargoes/cargoes.component';
import { AddCargoFormComponent } from './components/Cargoes/add-cargo-form/add-cargo-form.component';
import { CargoesViewComponent } from './views/cargoes-view/cargoes-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PlanetsViewComponent,
    PlanetsComponent,
    PlanetComponent,
    AddPlanetFormComponent,
    ErrorFormComponent,
    AddStationFormComponent,
    StationComponent,
    StationsComponent,
    StationsViewComponent,
    CargoComponent,
    CargoesComponent,
    AddCargoFormComponent,
    CargoesViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
