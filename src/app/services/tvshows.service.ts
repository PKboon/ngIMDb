import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKey, serviceBaseUrl } from '../contants';
import { map } from 'rxjs';
import { TvShow, TvShowDto } from '../types/tvShows';
import { CreditsDto, ImagesDto, VideosDto } from '../types/media';

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

  getTvShowById(id: number) {
    return this.httpClient.get<TvShow>(
      `${serviceBaseUrl}/tv/${id}?api_key=${apiKey}`
    );
  }

  getVideosByTvShowId(id: number) {
    return this.httpClient
      .get<VideosDto>(`${serviceBaseUrl}/tv/${id}/videos?api_key=${apiKey}`)
      .pipe(map((data) => data.results));
  }

  getImagesByTvShowId(id: number) {
    return this.httpClient
      .get<ImagesDto>(`${serviceBaseUrl}/tv/${id}/images?api_key=${apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getCastsByTvShowId(id: number) {
    return this.httpClient
      .get<CreditsDto>(`${serviceBaseUrl}/tv/${id}/credits?api_key=${apiKey}`)
      .pipe(map((data) => data.cast));
  }

  getSimilarByTvShowId(id: number) {
    return this.httpClient
      .get<TvShowDto>(`${serviceBaseUrl}/tv/${id}/similar?api_key=${apiKey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }
}
