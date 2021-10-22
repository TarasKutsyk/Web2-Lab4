import { Component, OnInit } from '@angular/core';

import {ApiService} from "../../services/api.service";
import Planet from "../../components/models/Planet";
import {ApiConfig} from "../../config"

@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Planet[] = []
  planetsUrl: string = ApiConfig.planets;

  constructor(private planetService: ApiService<Planet>) {
    planetService.getItems(this.planetsUrl).subscribe(items => {
      this.planets = items
      console.log(this.planets);
    });
  }

  ngOnInit(): void {
  }

}
