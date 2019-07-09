import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesPopularPage } from './series-popular';

@NgModule({
  declarations: [
    SeriesPopularPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesPopularPage),
  ],
})
export class SeriesPopularPageModule {}
