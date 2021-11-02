import {Component, Input, OnInit} from '@angular/core';
import Station from "../../../models/Station";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  @Input() stations: Station[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
