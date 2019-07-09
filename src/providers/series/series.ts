import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SeriesProvider {
  private basicApiPath = "https://api.themoviedb.org/3"
  constructor(public http: HttpClient) {
  }

  public getPopularSeries(page = 1) {
    return this.http.get(this.basicApiPath + `/tv/popular?page=${page}&api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getSeriesLatest(page = 1) {
    return this.http.get(this.basicApiPath + `/tv/on_the_air?page=${page}&api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getTopsSeries(page = 1) {
    return this.http.get(this.basicApiPath + `/tv/top_rated?page=${page}&api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getSeriesDetails(id) {
    return this.http.get(this.basicApiPath + `/tv/${id}?api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getSeriesReviews(id) {
    return this.http.get(this.basicApiPath + `/tv/${id}/reviews?api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getSeriesRelated(id) {
    return this.http.get(this.basicApiPath + `/tv/${id}/similar?api_key=7d40086840c0118476f2e09dda573d34`)
  }
  public getPesquisarSeries(texto) {
    return this.http.get(this.basicApiPath + `/search/tv?api_key=7d40086840c0118476f2e09dda573d34&query=${texto}`)
  }
}
