import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import {STATIONS} from '../../stations-list';

@Component({
  selector: 'app-orange-line',
  templateUrl: './orange-line.component.html',
  styleUrls: ['./orange-line.component.css']
})
export class OrangeLineComponent implements OnInit {

  orangeLineStations: Station[] = STATIONS;

  filterArgs = {line: 'orange'}

  constructor() { }

  ngOnInit(): void {
  }

}
