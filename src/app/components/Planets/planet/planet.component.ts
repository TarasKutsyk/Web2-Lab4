import {Component, Input, OnInit} from '@angular/core';
import Planet from "../../../models/Planet";
import {PlanetService} from "../../../services/planet.service";
import {Action} from "../../../models/Action";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @Input() planet !: Planet;
  constructor(private planetService: PlanetService) { }

  updatePlanet() {
    this.planetService.setAction({action: Action.Update, payload: this.planet});
  }

  deletePlanet() {
    this.planetService.setAction({action: Action.Delete, payload: this.planet});
  }

  ngOnInit(): void {
  }
}
