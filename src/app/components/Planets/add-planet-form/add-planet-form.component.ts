import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import Planet from "../../../models/Planet";
import {NgForm} from "@angular/forms";
import {planetAction, PlanetService} from "../../../services/planet.service";
import {Action} from "../../../models/Action";

@Component({
  selector: 'app-add-planet-form',
  templateUrl: './add-planet-form.component.html',
  styleUrls: ['./add-planet-form.component.scss']
})
export class AddPlanetFormComponent implements OnInit {
  editFlag = false;
  updateObject?: Planet;
  //NOTE: only falsy values
  planetFormModel: Planet = {
    name: '',
    storage: 0,
    weight: 0
  }

  constructor(private planetService: PlanetService) {
    planetService.currentPlanetAction.subscribe((pa: planetAction) => {
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

  prepareEditForm(planet: Planet) {
    this.planetFormModel = {...planet, _id: undefined};
  }

  submitPlanet(form: NgForm) {
    const newData = this.planetFormModel;

    if (this.editFlag) {
      const updatedPlanet = this.mergeUpdatedPlanet(this.updateObject as Planet, newData);

      this.planetService.setAction({action: Action.UpdateReady, payload: updatedPlanet});
      this.editFlag = false;
    } else {
      this.planetService.setAction({action: Action.Create, payload: newData})
    }

    form.resetForm();
  }

  mergeUpdatedPlanet(oldPlanet : Planet, newPlanet: Planet) {
    const mergedPlanet = {...oldPlanet};

    for (const newPlanetKey in newPlanet) {
      // @ts-ignore
      if (newPlanet[newPlanetKey]) {
        // @ts-ignore
        mergedPlanet[newPlanetKey] = newPlanet[newPlanetKey];
      }
    }

    return mergedPlanet;
  }
}
