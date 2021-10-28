import {Component, Input, OnInit} from '@angular/core';
import Station from "../../../models/Station";
import {StationService} from "../../../services/station.service";
import {Action} from "../../../models/Action";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  @Input() station!: Station
  constructor(private stationService: StationService) { }

  updateStation() {
    this.stationService.setAction({action: Action.Update, payload: this.station});
  }

  deleteStation() {
    this.stationService.setAction({action: Action.Delete, payload: this.station});
  }

  ngOnInit(): void {
  }
}
