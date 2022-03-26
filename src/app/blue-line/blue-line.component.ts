import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import {STATIONS} from '../../stations-list'

@Component({
  selector: 'app-blue-line',
  templateUrl: './blue-line.component.html',
  styleUrls: ['./blue-line.component.css']
})
export class BlueLineComponent implements OnInit {

  blueLineStations: Station[] = STATIONS;

  filterArgs = {line: 'blue'}

  constructor() { }

  ngOnInit(): void {
  }

}
