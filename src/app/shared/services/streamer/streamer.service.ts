import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../../interfaces/List';
import { Results } from '../../interfaces/Results';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StreamerService {
  private readonly apiKey = `c02a062e55ce8d7f80d297b22d97c0ca`;
  private readonly baseUrl = `https://api.themoviedb.org/3/movie/76341?api_key=${this.apiKey}`;
  private readonly baseUrlList = `https://api.themoviedb.org/4/list/1?page=1&api_key=${this.apiKey}&language=pt-BR`;
  private readonly baseUrlListSeries = `https://api.themoviedb.org/4/genre/tv/listlist/1?page=1&api_key=${this.apiKey}&language=pt-BR`;
  private readonly apiURL = `${this.baseUrl}`;

  constructor(private http: HttpClient) {}

  public list(): Observable<Results[]> {
    return this.http
      .get<List>(this.baseUrlList)
      .pipe(map((res: List) => res.results));
  }
  public listSeries(): Observable<Results[]> {
    return this.http
      .get<List>(this.baseUrlList)
      .pipe(map((res: List) => res.results));
  }
}
