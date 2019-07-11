import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../../providers/movie/movie';
import { FilmesDetalhesPage } from '../filme-detalhes/filmes-detalhes';
import { SeriesTopsPage } from '../../Series-Pages/series-tops/series-tops';

@IonicPage()
@Component({
  selector: 'page-filmes-tops',
  templateUrl: 'filmes-tops.html',
})
export class FilmesTopsPage {
  public lista_filmes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.carregarFilmes();
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

    this.carregarFilmes();
  }


  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmesDetalhesPage,{id: filme.id});
  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
    infiniteScroll.complete(); 
  }

  carregarFilmes(newpage:boolean = false) {
    this.abrirLoading();
    this.movieProvider.getTopsMovies(this.page).subscribe(
      data =>{
        const objeto_retorno = data as any;
        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno['results']);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = objeto_retorno['results'];
        }
        console.log(this.lista_filmes);

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
