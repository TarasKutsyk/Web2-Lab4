import {Component, Input, OnInit} from '@angular/core';
import Planet from "../../../models/Planet";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @Input() planets: Planet[] = []
  constructor() {

  }

  ngOnInit(): void {
  }
}
