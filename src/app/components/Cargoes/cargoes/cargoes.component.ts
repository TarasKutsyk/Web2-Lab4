import {Component, Input, OnInit} from '@angular/core';
import Cargo from "../../../models/Cargo";

@Component({
  selector: 'app-cargoes',
  templateUrl: './cargoes.component.html',
  styleUrls: ['./cargoes.component.scss']
})
export class CargoesComponent implements OnInit {
  @Input() cargoes: Cargo[] = []

  constructor() { }

  ngOnInit(): void {
  }
}
