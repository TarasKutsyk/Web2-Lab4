import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

import {ApiConfig} from "../config"
import Planet from "../models/Planet";
import {HttpErrorResponse} from "@angular/common/http";
import {Subject, throwError} from "rxjs";
import {Action, ActionType} from "../models/Action";

export type planetAction = {
  payload: Planet,
  action: ActionType
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planetSubject = new Subject<planetAction>();

  currentPlanetAction = this.planetSubject.asObservable();
  planetsUrl: string = ApiConfig.planets;

  constructor(private API: ApiService<Planet>) {

  }

  setAction(action: planetAction) {
    this.planetSubject.next(action);
  }

  getPlanets() {
    return this.API.getItems(this.planetsUrl);
  }

  createPlanet(planet: Planet) {
    return this.API.addItem(planet, this.planetsUrl);
  }

  updatePlanet(planet: Planet) {
    return this.API.editItem(planet, this.planetsUrl);
  }

  deletePlanet(planet: Planet) {
    return this.API.deleteItem(planet, this.planetsUrl);
  }

  handleError(description: string) {
    return (error: HttpErrorResponse) => {
      if (error.status === 0) {
        return console.error('A client error occurred:', error.error);
      } else {
        return console.error(
          `${description}:`, error.error);
      }
    }
  }
}