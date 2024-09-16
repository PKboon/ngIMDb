import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKey, serviceBaseUrl } from '../contants';
import { map } from 'rxjs';
import { TvShowDto } from '../types/tvShows';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  constructor(private httpClient: HttpClient) {}

  getTvShowsByType(type: string, count = 12) {
    return this.httpClient
      .get<TvShowDto>(`${serviceBaseUrl}/tv/${type}?api_key=${apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
}
