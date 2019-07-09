import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesTopsPage } from './series-tops';

@NgModule({
  declarations: [
    SeriesTopsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesTopsPage),
  ],
})
export class SeriesTopsPageModule {}
