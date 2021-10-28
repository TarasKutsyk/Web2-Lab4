import { Component, OnInit } from '@angular/core';

import {stationAction, StationService} from "../../services/station.service";
import Station from "../../models/Station";
import {HttpErrorResponse} from "@angular/common/http";
import {Action} from "../../models/Action";


@Component({
  selector: 'app-stations-view',
  templateUrl: './stations-view.component.html',
  styleUrls: ['./stations-view.component.scss']
})
export class StationsViewComponent implements OnInit {
  stations: Station[] = []
  errorText?: string

  constructor(private StationService: StationService) {
    StationService.getStations().subscribe(items => this.stations = items);

    StationService.currentStationAction.subscribe((sa: stationAction) => {
      const { payload } = sa;

      if (sa.action === Action.Delete) {
        this.deleteStation(payload);
      } else if (sa.action === Action.Create) {
        this.addStation(payload);
      } else if (sa.action === Action.UpdateReady) {
        this.editStation(payload);
      }
    });
  }

  ngOnInit(): void {
  }

  deleteStation(currentStation: Station) {
    this.StationService.deleteStation(currentStation).subscribe(
      () => {
        const StationIndex = this.stations.findIndex(Station => Station._id === currentStation._id);

        this.stations.splice(StationIndex, 1);
      },
      this.handleError('Station delete error')
    );
  }

  editStation(newStation: Station) {
    this.StationService.updateStation(newStation)
      .subscribe(() => {
          const newStationIndex = this.stations.findIndex(Station => Station._id === newStation._id);

          this.stations[newStationIndex] = newStation;
        },
        this.handleError('Station update error')
      );
  }

  addStation(station: Station) {
    this.StationService.createStation(station)
      .subscribe((newStation: Station) => {
          this.stations.push(newStation);
        },
        this.handleError('Station create error')
      );
  }

  handleError(description: string) {
    return (error: HttpErrorResponse) => {
      this.errorText = error.status === 0 ?
        `A client error occurred: ${error.error}` :
        `${description}: ${error.error}`
    }
  }
}
