import { Component, OnInit } from '@angular/core';

import {planetAction, PlanetService} from "../../services/planet.service";
import Planet from "../../models/Planet";
import {HttpErrorResponse} from "@angular/common/http";
import {Action} from "../../models/Action";


@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Planet[] = []
  errorText?: string

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
      this.handleError('Planet delete error')
    );
  }

  editPlanet(newPlanet: Planet) {
    this.planetService.updatePlanet(newPlanet)
      .subscribe(() => {
        const newPlanetIndex = this.planets.findIndex(planet => planet._id === newPlanet._id);

        this.planets[newPlanetIndex] = newPlanet;
      },
        this.handleError('Planet update error')
      );
  }

  addPlanet(planet: Planet) {
    this.planetService.createPlanet(planet)
      .subscribe((newPlanet: Planet) => {
        this.planets.push(newPlanet);
      },
        this.handleError('Planet create error')
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
