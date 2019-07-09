import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-filmes-detalhes',
  templateUrl: 'filmes-detalhes.html',

  providers: [
    MovieProvider
  ]
})
export class FilmesDetalhesPage {
  public filme;
  public review;
  public review_resto;
  public filmeid;
  public filmeidreviwes;
  public filmereviews;
  public lista_filmes_reviews = new Array<any>();
  public lista_filmes_related = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  @Input() text: string;
  @Input() limit: number = 40;
  public truncating = true;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidEnter() {
    this.getMovieReviews();
    this.getMovieDetails();
    this.getMovieRelated();
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

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmesDetalhesPage, { id: filme.id });
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



  getMovieReviews() {
    this.filmeidreviwes = this.navParams.get("id");
    this.movieProvider.getMoviesReviews(this.filmeidreviwes).subscribe(
      data => {
        const objeto_retorno = data as any;
        this.lista_filmes_reviews = this.lista_filmes_reviews.concat(objeto_retorno['results']);
        console.log(this.lista_filmes_reviews);
      }, error => {
        console.log(error);
      }
    )
  }

  getMovieDetails() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMoviesDetails(this.filmeid).subscribe(
      data => {
        this.filme = data as any;
        console.log(this.filme)
      }, error => {
        console.log(error);
      }
    )
  }

  getMovieRelated() {
    this.filmeidreviwes = this.navParams.get("id");
    this.movieProvider.getMoviesRelated(this.filmeidreviwes).subscribe(
      data => {
        const objeto_retorno = data as any;
        this.lista_filmes_related = this.lista_filmes_related.concat(objeto_retorno['results']);
        //console.log(this.lista_filmes_related)
        console.log(this.lista_filmes_related);
      }, error => {
        console.log(error);
      }
    )
  }
}