import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesLatestPage } from './series-latest';

@NgModule({
  declarations: [
    SeriesLatestPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesLatestPage),
  ],
})
export class SeriesLatestPageModule {}
