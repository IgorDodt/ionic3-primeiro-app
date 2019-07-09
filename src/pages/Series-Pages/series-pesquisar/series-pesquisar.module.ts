import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesPesquisarPage } from './series-pesquisar';

@NgModule({
  declarations: [
    SeriesPesquisarPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesPesquisarPage),
  ],
})
export class SeriesPesquisarPageModule {}
