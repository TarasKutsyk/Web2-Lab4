import { Component, OnInit } from '@angular/core';

import {planetAction, PlanetService} from "../../services/planet.service";
import Planet from "../../models/Planet";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {Action} from "../../models/Action";


@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Planet[] = []

  constructor(private planetService: PlanetService) {
    planetService.getPlanets().subscribe(items => this.planets = items);

    planetService.currentPlanetAction.subscribe((pa: planetAction) => {
      const { payload } = pa;

      if (pa.action === Action.Delete) {
        this.deletePlanet(payload);
      } else if (pa.action === Action.Create) {
        this.addPlanet(payload);
      } else if (pa.action === Action.UpdateReady) {
        this.editPlanet(payload);
      }
    });
  }

  ngOnInit(): void {
  }

  deletePlanet(currentPlanet: Planet) {
    this.planetService.deletePlanet(currentPlanet).subscribe(
      () => {
        const planetIndex = this.planets.findIndex(planet => planet._id === currentPlanet._id);

        this.planets.splice(planetIndex, 1);
      },
      this.planetService.handleError('Planet delete error')
    );
  }

  editPlanet(newPlanet: Planet) {
    this.planetService.updatePlanet(newPlanet)
      .subscribe(() => {
        const newPlanetIndex = this.planets.findIndex(planet => planet._id === newPlanet._id);

        this.planets[newPlanetIndex] = newPlanet;
      },
        this.planetService.handleError('Planet update error')
      );
  }

  addPlanet(planet: Planet) {
    this.planetService.createPlanet(planet)
      .subscribe((newPlanet: Planet) => {
        this.planets.push(newPlanet);
      },
        this.planetService.handleError('Planet create error')
    );
  }
}
