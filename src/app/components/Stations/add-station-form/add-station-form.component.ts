import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {stationAction, StationService} from "../../../services/station.service";
import {Action} from "../../../models/Action";
import Station from "../../../models/Station";

@Component({
  selector: 'app-add-station-form',
  templateUrl: './add-station-form.component.html',
  styleUrls: ['./add-station-form.component.scss']
})
export class AddStationFormComponent implements OnInit {
  editFlag = false;
  updateObject?: Station;
  //NOTE: only falsy values
  stationFormModel: Station = {
    number: 0,
    storage: 0,
    need: 0,
    planetLocation: ''
  }

  constructor(private stationService: StationService) {
    stationService.currentStationAction.subscribe((pa: stationAction) => {
      if (pa.action === Action.Update) {
        const { payload } = pa;

        this.editFlag = true;
        this.updateObject = payload;

        this.prepareEditForm(payload);
      }
    });
  }

  ngOnInit(): void {
  }

  prepareEditForm(station: Station) {
    this.stationFormModel = {...station, _id: undefined};
  }

  submitStation(form: NgForm) {
    const newData = this.stationFormModel;

    if (this.editFlag) {
      const updatedStation = this.mergeUpdatedStation(this.updateObject as Station, newData);

      this.stationService.setAction({action: Action.UpdateReady, payload: updatedStation});
      this.editFlag = false;
    } else {
      this.stationService.setAction({action: Action.Create, payload: newData})
    }

    form.resetForm();
  }

  mergeUpdatedStation(oldStation : Station, newStation: Station) {
    const mergedStation = {...oldStation};

    for (const newstationKey in newStation) {
      // @ts-ignore
      if (newStation[newstationKey]) {
        // @ts-ignore
        mergedStation[newstationKey] = newStation[newstationKey];
      }
    }

    return mergedStation;
  }
}
