import {Component, Input, OnInit} from '@angular/core';
import Cargo from "../../../models/Cargo";
import {CargoService} from "../../../services/cargo.service";
import {Action} from "../../../models/Action";

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {
  @Input() cargo!: Cargo
  constructor(private cargoService: CargoService) { }

  updateCargo() {
    this.cargoService.setAction({action: Action.Update, payload: this.cargo});
  }

  deleteCargo() {
    this.cargoService.setAction({action: Action.Delete, payload: this.cargo});
  }

  ngOnInit(): void {
  }
}
