import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CargoAction, CargoService} from "../../../services/cargo.service";
import {Action} from "../../../models/Action";
import Cargo from "../../../models/Cargo";

@Component({
  selector: 'app-add-cargo-form',
  templateUrl: './add-cargo-form.component.html',
  styleUrls: ['./add-cargo-form.component.scss']
})
export class AddCargoFormComponent implements OnInit {
  editFlag = false;
  updateObject?: Cargo;
  //NOTE: only falsy values
  cargoFormModel: Cargo = {
    name: '',
    weight: 0,
    code: 0,
    planetDestination: '',
    stationDestination: 0,
  }

  constructor(private cargoService: CargoService) {
    cargoService.currentCargoAction.subscribe((pa: CargoAction) => {
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

  prepareEditForm(cargo: Cargo) {
    this.cargoFormModel = {...cargo, _id: undefined};
  }

  submitCargo(form: NgForm) {
    const newData = this.cargoFormModel;

    if (this.editFlag) {
      const updatedCargo = this.mergeUpdatedCargo(this.updateObject as Cargo, newData);

      this.cargoService.setAction({action: Action.UpdateReady, payload: updatedCargo});
      this.editFlag = false;
    } else {
      this.cargoService.setAction({action: Action.Create, payload: newData})
    }

    form.resetForm();
  }

  mergeUpdatedCargo(oldCargo : Cargo, newCargo: Cargo) {
    const mergedCargo = {...oldCargo};

    for (const newcargoKey in newCargo) {
      // @ts-ignore
      if (newCargo[newcargoKey]) {
        // @ts-ignore
        mergedCargo[newcargoKey] = newCargo[newcargoKey];
      }
    }

    return mergedCargo;
  }
}
