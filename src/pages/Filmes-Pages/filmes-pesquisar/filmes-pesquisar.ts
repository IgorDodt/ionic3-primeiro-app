import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../../providers/movie/movie';
import { FilmesTabsPage } from '../../tabs/filmes-tabs';
import { SeriesTabsPage } from '../../tabs/series-tabs';
import { FilmesDetalhesPage } from '../filme-detalhes/filmes-detalhes';

@IonicPage()
@Component({
  selector: 'page-filmes-pesquisar',
  templateUrl: 'filmes-pesquisar.html',
})

export class FilmesPesquisarPage {
  
  public texto;
  public lista_pesquisa = new Array<any>();
  public refresher;
  public isRefreshing: boolean = false;
  public loader;
  data: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
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

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmesDetalhesPage, { id: filme.id });
  }

  pesquisar(texto) {
    this.lista_pesquisa = [];
    this.abrirLoading();
    this.movieProvider.getPesquisarMovies(texto).subscribe(
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
