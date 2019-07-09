import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IntroPageModule } from '../pages/intro/intro.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmesTabsPage } from '../pages/tabs/filmes-tabs';
import { MyApp } from './app.component';
import { FilmesPopularesPageModule } from '../pages/Filmes-Pages/filmes-populares/filmes-populares.module';
import { FilmesDetalhesPageModule } from '../pages/Filmes-Pages/filme-detalhes/filmes-detalhes.module';
import { FilmesEmBrevePageModule } from '../pages/Filmes-Pages/filmes-embreve/filmes-embreve.module';
import { FilmesTopsPageModule } from '../pages/Filmes-Pages/filmes-tops/filmes-tops.module';
import { FilmesPesquisarPageModule } from '../pages/Filmes-Pages/filmes-pesquisar/filmes-pesquisar.module';
import { SeriesPopularPageModule } from '../pages/Series-Pages/series-popular/series-popular.module';
import { SeriesTabsPage } from '../pages/tabs/series-tabs';
import { SeriesDetalhesPageModule } from '../pages/Series-Pages/series-detalhes/series-detalhes.module';
import { SeriesLatestPageModule } from '../pages/Series-Pages/series-latest/series-latest.module';
import { SeriesTopsPageModule } from '../pages/Series-Pages/series-tops/series-tops.module';
import { SeriesPesquisarPageModule } from '../pages/Series-Pages/series-pesquisar/series-pesquisar.module';

@NgModule({
  declarations: [
    MyApp,
    FilmesTabsPage,
    SeriesTabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FilmesPopularesPageModule,
    IntroPageModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    PerfilPageModule,
    FilmesDetalhesPageModule,
    FilmesEmBrevePageModule,
    FilmesTopsPageModule,
    FilmesPesquisarPageModule,
    SeriesPopularPageModule,
    SeriesDetalhesPageModule,
    SeriesLatestPageModule,
    SeriesTopsPageModule,
    SeriesPesquisarPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmesTabsPage,
    SeriesTabsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    //MovieProvider,
  ]
})
export class AppModule { }
