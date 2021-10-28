import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

import {ApiConfig} from "../config"
import Station from "../models/Station";
import {Subject} from "rxjs";
import {Action, ActionType} from "../models/Action";

export type stationAction = {
  payload: Station,
  action: ActionType
}

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private stationSubject = new Subject<stationAction>();

  currentStationAction = this.stationSubject.asObservable();
  stationsUrl: string = ApiConfig.stations;

  constructor(private API: ApiService<Station>) {

  }

  setAction(action: stationAction) {
    this.stationSubject.next(action);
  }

  getStations() {
    return this.API.getItems(this.stationsUrl);
  }

  createStation(station: Station) {
    return this.API.addItem(station, this.stationsUrl);
  }

  updateStation(station: Station) {
    return this.API.editItem(station, this.stationsUrl);
  }

  deleteStation(station: Station) {
    return this.API.deleteItem(station, this.stationsUrl);
  }
}
