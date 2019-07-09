import { Component } from '@angular/core';
import { SeriesPesquisarPage } from '../Series-Pages/series-pesquisar/series-pesquisar';
import { SeriesTopsPage } from '../Series-Pages/series-tops/series-tops';
import { SeriesLatestPage } from '../Series-Pages/series-latest/series-latest';
import { SeriesPopularPage } from '../Series-Pages/series-popular/series-popular';

@Component({
  templateUrl: 'series-tabs.html'
})
export class SeriesTabsPage {

  tab1Root = SeriesPopularPage;
  tab2Root = SeriesTopsPage;
  tabs3Root = SeriesLatestPage;
  tab5Root = SeriesPesquisarPage;

  constructor() {

  }
}
