import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesPopularesPage } from './filmes-populares';

@NgModule({
  declarations: [
    FilmesPopularesPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesPopularesPage),
  ],
})
export class FilmesPopularesPageModule {}
