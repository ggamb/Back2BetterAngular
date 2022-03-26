import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RedLineComponent } from './red-line/red-line.component';
import { SilverLineComponent } from './silver-line/silver-line.component';
import { OrangeLineComponent } from './orange-line/orange-line.component';
import { BlueLineComponent } from './blue-line/blue-line.component';
import { YellowLineComponent } from './yellow-line/yellow-line.component';
import { GreenLineComponent } from './green-line/green-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RedLineComponent,
    SilverLineComponent,
    OrangeLineComponent,
    BlueLineComponent,
    YellowLineComponent,
    GreenLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
