import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedLineComponent } from './red-line/red-line.component';
import { SilverLineComponent } from './silver-line/silver-line.component';
import { OrangeLineComponent } from './orange-line/orange-line.component';
import { BlueLineComponent } from './blue-line/blue-line.component';
import { YellowLineComponent } from './yellow-line/yellow-line.component';
import { GreenLineComponent } from './green-line/green-line.component';
import { StationFilterPipe } from './station-filter.pipe';
import { StationTransferPipe } from './station-transfer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RedLineComponent,
    SilverLineComponent,
    OrangeLineComponent,
    BlueLineComponent,
    YellowLineComponent,
    GreenLineComponent,
    StationFilterPipe,
    StationTransferPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
