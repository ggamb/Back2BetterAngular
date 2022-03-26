import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueLineComponent } from './blue-line/blue-line.component';
import { GreenLineComponent } from './green-line/green-line.component';
import { OrangeLineComponent } from './orange-line/orange-line.component';
import { RedLineComponent } from './red-line/red-line.component'
import { SilverLineComponent } from './silver-line/silver-line.component';
import { YellowLineComponent } from './yellow-line/yellow-line.component';

const routes: Routes = [
  { path: 'red', component: RedLineComponent },
  { path: 'yellow', component: YellowLineComponent },
  { path: 'green', component: GreenLineComponent },
  { path: 'blue', component: BlueLineComponent },
  { path: 'orange', component: OrangeLineComponent },
  { path: 'silver', component: SilverLineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
