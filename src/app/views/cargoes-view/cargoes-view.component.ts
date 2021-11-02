import { Component, OnInit } from '@angular/core';

import {CargoAction, CargoService} from "../../services/cargo.service";
import Cargo from "../../models/Cargo";
import {HttpErrorResponse} from "@angular/common/http";
import {Action} from "../../models/Action";

@Component({
  selector: 'app-cargoes-view',
  templateUrl: './cargoes-view.component.html',
  styleUrls: ['./cargoes-view.component.scss']
})
export class CargoesViewComponent implements OnInit {
  cargoes: Cargo[] = []
  errorText?: string

  constructor(private CargoService: CargoService) {
    CargoService.getCargos().subscribe(items => this.cargoes = items);

    CargoService.currentCargoAction.subscribe((ca: CargoAction) => {
      const { payload } = ca;

      if (ca.action === Action.Delete) {
        this.deleteCargo(payload);
      } else if (ca.action === Action.Create) {
        this.addCargo(payload);
      } else if (ca.action === Action.UpdateReady) {
        this.editCargo(payload);
      }
    });
  }

  ngOnInit(): void {
  }

  deleteCargo(currentCargo: Cargo) {
    this.CargoService.deleteCargo(currentCargo).subscribe(
      () => {
        const CargoIndex = this.cargoes.findIndex(Cargo => Cargo._id === currentCargo._id);

        this.cargoes.splice(CargoIndex, 1);
      },
      this.handleError('Cargo delete error')
    );
  }

  editCargo(newCargo: Cargo) {
    this.CargoService.updateCargo(newCargo)
      .subscribe(() => {
          const newCargoIndex = this.cargoes.findIndex(Cargo => Cargo._id === newCargo._id);

          this.cargoes[newCargoIndex] = newCargo;
        },
        this.handleError('Cargo update error')
      );
  }

  addCargo(cargo: Cargo) {
    this.CargoService.createCargo(cargo)
      .subscribe((newCargo: Cargo) => {
          this.cargoes.push(newCargo);
        },
        this.handleError('Cargo create error')
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
