import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieDto } from '../types/movie';
import { apiKey, serviceBaseUrl } from '../contants';
import { map } from 'rxjs';
import { VideosDto } from '../types/video';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMoviesByType(type: string, count = 12) {
    return this.httpClient
      .get<MovieDto>(`${serviceBaseUrl}/movie/${type}?api_key=${apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: number) {
    return this.httpClient.get<Movie>(
      `${serviceBaseUrl}/movie/${id}?api_key=${apiKey}`
    );
  }

  getVideosByMovieId(id: number) {
    return this.httpClient
      .get<VideosDto>(`${serviceBaseUrl}/movie/${id}/videos?api_key=${apiKey}`)
      .pipe(map((data) => data.results));
  }
}
