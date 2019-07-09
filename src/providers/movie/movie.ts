import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {
  private basicApiPath = "https://api.themoviedb.org/3"
  constructor(public http: HttpClient) {
  }

  public getPopularMovies(page = 1) {
    return this.http.get(this.basicApiPath + `/movie/popular?page=${page}&api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getEmBreveMovies(page = 1) {
    return this.http.get(this.basicApiPath + `/movie/upcoming?page=${page}&api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getTopsMovies(page = 1) {
    return this.http.get(this.basicApiPath + `/movie/top_rated?page=${page}&api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getMoviesDetails(filmeid) {
    return this.http.get(this.basicApiPath + `/movie/${filmeid}?api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getMoviesReviews(filmeid) {
    return this.http.get(this.basicApiPath + `/movie/${filmeid}/reviews?api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getMoviesRelated(filmeid) {
    return this.http.get(this.basicApiPath + `/movie/${filmeid}/similar?api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getPesquisarMovies(texto) {
    return this.http.get(this.basicApiPath + `/search/movie?api_key=7d40086840c0118476f2e09dda573d34&query=${texto}`)
  }
}
