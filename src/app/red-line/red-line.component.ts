import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import {STATIONS} from '../../stations-list'


@Component({
  selector: 'app-red-line',
  templateUrl: './red-line.component.html',
  styleUrls: ['./red-line.component.css']
})
export class RedLineComponent implements OnInit {

  redLineStations: Station[] = STATIONS;

  filterArgs = {line: 'red'}

  constructor() { }

  ngOnInit(): void {
    this.getRedLineTrains();
  }

  getRedLineTrains() {
    console.log('this works');
  }

}
