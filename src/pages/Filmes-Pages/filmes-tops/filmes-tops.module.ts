import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesTopsPage } from './filmes-tops';

@NgModule({
  declarations: [
    FilmesTopsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesTopsPage) 
  ],
})
export class FilmesTopsPageModule {}
