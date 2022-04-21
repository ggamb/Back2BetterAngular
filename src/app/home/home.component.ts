import { Component, OnInit } from '@angular/core';
import { LineInfo } from '../line-info';
import { TrainLocationService } from '../train-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TrainLocationService]
})
export class HomeComponent implements OnInit {

  constructor(
    private trainService: TrainLocationService,
    //public trainInfo: Array<LineInfo>

  ) { }


  ngOnInit(): void {
    this.trainService.getGeneralInfo().subscribe(
      response => {
        console.log(response)

        let lines = response.lineMetricsByLine;
        console.log(lines);

        for (const [k , v] of Array.from(Object.entries(lines))) {
          console.log('line', v)
          /*this.trainInfo.push({
            lineCode : v.lineCode,
            maximumTrainDelay : v.maximumTrainDelay,
            averageTrainFrequency : v.averageTrainFrequency,
            expectedTrainFrequency : v.expectedTrainFrequency,
            averagePlatformWaitTime : v.averagePlatformWaitTime,
            platformWaitTimeTrendStatus : v.platformWaitTimeTrendStatus,
            numTrains : v.numTrains,
            trainFrequencyStatus : v.trainFrequencyStatus
          })*/
        
        }

        //console.log(this.trainInfo)

      },
      error => {
        console.log(error);
      }
    );
  }

}
