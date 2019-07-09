import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesEmBrevePage } from './filmes-embreve';

@NgModule({
  declarations: [
    FilmesEmBrevePage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesEmBrevePage),
  ],
})
export class FilmesEmBrevePageModule {}
