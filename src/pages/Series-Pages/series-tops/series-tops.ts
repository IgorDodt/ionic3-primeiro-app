import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SeriesProvider } from '../../../providers/series/series';
import { SeriesDetalhesPage } from '../series-detalhes/series-detalhes';
import { FilmesTopsPage } from '../../Filmes-Pages/filmes-tops/filmes-tops';

@IonicPage()
@Component({
  selector: 'page-series-tops',
  templateUrl: 'series-tops.html',
})
export class SeriesTopsPage {
  public lista_series = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private serieProvider: SeriesProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter(){
    this.carregarSeries();
  }

  mudarTabSeries(){
    this.navCtrl.setRoot(SeriesTopsPage)
  }

  mudarTabFilmes(){
    this.navCtrl.setRoot(FilmesTopsPage)
  }

  abrirLoading(){
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fecharLoading(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarSeries();
  }


  abrirDetalhes(serie){
    console.log(serie);
    this.navCtrl.push(SeriesDetalhesPage,{ id: serie.id });
  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarSeries(true);
    infiniteScroll.complete();
  }

  carregarSeries(newpage:boolean = false) {
    this.abrirLoading();
    this.serieProvider.getTopsSeries(this.page).subscribe(
      data =>{
        const objeto_retorno = data as any;
        if(newpage){
          this.lista_series = this.lista_series.concat(objeto_retorno['results']);
          this.infiniteScroll.complete();
        }else{
          this.lista_series = objeto_retorno['results'];
        }
        console.log(this.lista_series);

        this.fecharLoading();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
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
