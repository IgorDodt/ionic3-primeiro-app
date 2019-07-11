import { Component } from '@angular/core';
import { FilmesEmBrevePage } from '../Filmes-Pages/filmes-embreve/filmes-embreve';
import { FilmesPesquisarPage } from '../Filmes-Pages/filmes-pesquisar/filmes-pesquisar';
import { FilmesPopularesPage } from '../Filmes-Pages/filmes-populares/filmes-populares';
import { FilmesTopsPage } from '../Filmes-Pages/filmes-tops/filmes-tops';

@Component({
  templateUrl: 'filmes-tabs.html'
})
export class FilmesTabsPage {

  tab1Root = FilmesPopularesPage;
  tab2Root = FilmesTopsPage;
  tab3Root = FilmesEmBrevePage;
  tab4Root = FilmesPesquisarPage;

  constructor() {

  }
}
