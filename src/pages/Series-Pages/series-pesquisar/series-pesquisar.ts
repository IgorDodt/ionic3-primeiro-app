import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../../providers/movie/movie';
import { SeriesDetalhesPage } from '../series-detalhes/series-detalhes';
import { SeriesProvider } from '../../../providers/series/series';

/**
 * Generated class for the SeriesPesquisarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series-pesquisar',
  templateUrl: 'series-pesquisar.html',

  providers: [
    SeriesProvider
  ]

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
