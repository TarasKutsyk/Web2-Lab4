import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

import {ApiConfig} from "../config"
import Cargo from "../models/Cargo";
import {Subject} from "rxjs";
import {Action, ActionType} from "../models/Action";
import Station from "../models/Station";
import {stationAction} from "./station.service";

export type CargoAction = {
  payload: Cargo,
  action: ActionType
}

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private cargoSubject = new Subject<CargoAction>();

  currentCargoAction = this.cargoSubject.asObservable();
  cargosUrl: string = ApiConfig.cargoes;

  constructor(private API: ApiService<Cargo>) {

  }

  setAction(action: CargoAction) {
    this.cargoSubject.next(action);
  }

  getCargos() {
    return this.API.getItems(this.cargosUrl);
  }

  createCargo(cargo: Cargo) {
    return this.API.addItem(cargo, this.cargosUrl);
  }

  updateCargo(cargo: Cargo) {
    return this.API.editItem(cargo, this.cargosUrl);
  }

  deleteCargo(cargo: Cargo) {
    return this.API.deleteItem(cargo, this.cargosUrl);
  }
}
