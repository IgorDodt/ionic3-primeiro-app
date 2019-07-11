import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SeriesProvider } from '../../../providers/series/series';
import { SeriesDetalhesPage } from '../series-detalhes/series-detalhes';
import { SeriesLatestPage } from '../series-latest/series-latest';
import { FilmesEmBrevePage } from '../../Filmes-Pages/filmes-embreve/filmes-embreve';
import { SeriesTabsPage } from '../../tabs/series-tabs';
import { FilmesTabsPage } from '../../tabs/filmes-tabs';

@IonicPage()
@Component({
  selector: 'page-series-pesquisar',
  templateUrl: 'series-pesquisar.html',

})
export class SeriesPesquisarPage {public texto;
  
  public lista_pesquisa = new Array<any>();
  public refresher;
  public isRefreshing: boolean = false;
  public loader;
  data: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private serieProvider: SeriesProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.pesquisar;
  }

  mudarTabSeries(){
    this.navCtrl.setRoot(SeriesTabsPage);
  }

  mudarTabFilmes(){
    this.navCtrl.setRoot(FilmesTabsPage);
  }

  abrirLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fecharLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.pesquisar;
  }

  abrirDetalhes(serie) {
    console.log(serie);
    this.navCtrl.push(SeriesDetalhesPage, { id: serie.id });
  }

  pesquisar(texto) {
    this.lista_pesquisa = [];
    this.abrirLoading();
    this.serieProvider.getPesquisarSeries(texto).subscribe(
      data => {
        const objeto_retorno = data as any;
        this.lista_pesquisa = this.lista_pesquisa.concat(objeto_retorno['results']);
        this.fecharLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
        console.log(this.lista_pesquisa);
      }, error => {
        console.error(error);
        this.fecharLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        };
      }
    )
  }
}
