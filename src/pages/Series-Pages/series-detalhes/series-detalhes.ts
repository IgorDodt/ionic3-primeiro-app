import { Component, Input } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SeriesProvider } from '../../../providers/series/series';

@IonicPage()
@Component({
  selector: 'page-series-detalhes',
  templateUrl: 'series-detalhes.html',
})
export class SeriesDetalhesPage {
  public serie: any;
  public review;
  public review_resto;
  public serieid;
  public serieidreviwes;
  public filmereviews;
  public lista_series_reviews = new Array<any>();
  public lista_series_related = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  @Input() text: string;
  @Input() limit: number = 40;
  public truncating = true;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serieProvider: SeriesProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidEnter() {
    this.getSeriesDetails();
    this.getSeriesReviews();
    this.getSeriesRelated();
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

  }

  abrirDetalhes(serie) {
    console.log(serie);
    this.navCtrl.push(SeriesDetalhesPage, { id: serie.id });
  }

  checarTamanho(review) {
    if (review.length > 300) {
      review = review.substring(0, 300);
      this.review_resto = review;
      return review;
    } else {
      return review;
    }

  }

  mostrarRestoReview(review) {
    this.review_resto = this.review_resto + this.review_resto.substring(301, review.length)
    return this.review_resto;
  }

  getSeriesReviews() {
    this.serieidreviwes = this.navParams.get("id");
    this.serieProvider.getSeriesReviews(this.serieidreviwes).subscribe(
      data => {
        const objeto_retorno = data as any;
        this.lista_series_reviews = this.lista_series_reviews.concat(objeto_retorno['results']);
        console.log(this.lista_series_reviews);
      }, error => {
        console.log(error);
      }
    )
  }

  getSeriesDetails() {
    this.serieid = this.navParams.get("id");
    this.serieProvider.getSeriesDetails(this.serieid).subscribe(
      data => {
        this.serie = data as any;
        console.log(this.serie)
      }, error => {
        console.log(error);
      }
    )
  }

  getSeriesRelated() {
    this.serieidreviwes = this.navParams.get("id");
    this.serieProvider.getSeriesRelated(this.serieidreviwes).subscribe(
      data => {
        const objeto_retorno = data as any;
        this.lista_series_related = this.lista_series_related.concat(objeto_retorno['results']);
        console.log(this.lista_series_related);
      }, error => {
        console.log(error);
      }
    )
  }

}
