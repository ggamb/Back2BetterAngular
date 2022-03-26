import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import {STATIONS} from '../../stations-list'

@Component({
  selector: 'app-yellow-line',
  templateUrl: './yellow-line.component.html',
  styleUrls: ['./yellow-line.component.css']
})
export class YellowLineComponent implements OnInit {

  yellowLineStations: Station[] = STATIONS;

  filterArgs = {line: 'yellow'}

  constructor() { }

  ngOnInit(): void {
  }

}
