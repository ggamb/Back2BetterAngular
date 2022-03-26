import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import {STATIONS} from '../../stations-list'


@Component({
  selector: 'app-silver-line',
  templateUrl: './silver-line.component.html',
  styleUrls: ['./silver-line.component.css']
})
export class SilverLineComponent implements OnInit {

  silverLineStations: Station[] = STATIONS;

  filterArgs = {line: 'silver'}

  constructor() { }

  ngOnInit(): void {
  }

}
