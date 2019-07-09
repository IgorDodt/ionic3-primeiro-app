import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesDetalhesPage } from './series-detalhes';

@NgModule({
  declarations: [
    SeriesDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesDetalhesPage),
  ],
})
export class SeriesDetalhesPageModule {}
