import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesPesquisarPage } from './filmes-pesquisar';

@NgModule({
  declarations: [
    FilmesPesquisarPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesPesquisarPage),
  ],
})
export class FilmesPesquisarPageModule {}
