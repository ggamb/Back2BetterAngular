import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import { STATIONS } from '../../stations-list';
import { TrainLocationService } from '../train-location.service';



@Component({
  selector: 'app-red-line',
  templateUrl: './red-line.component.html',
  styleUrls: ['./red-line.component.css']
})
export class RedLineComponent implements OnInit {

  redLineStations: Station[] = STATIONS;

  filterArgs = { line: 'red' }

  posts: any;

  constructor(private trainService: TrainLocationService) { }

  ngOnInit(): void {
    this.trainService.getRedLineTrains().subscribe(
      response => { console.log(response) },
      (error) => { console.log(error); });
  }



}
