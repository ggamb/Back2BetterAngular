import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import {STATIONS} from '../../stations-list'

@Component({
  selector: 'app-green-line',
  templateUrl: './green-line.component.html',
  styleUrls: ['./green-line.component.css']
})
export class GreenLineComponent implements OnInit {

  greenLineStations: Station[] = STATIONS;

  filterArgs = {line: 'green'}

  constructor() { }

  ngOnInit(): void {
  }

}
