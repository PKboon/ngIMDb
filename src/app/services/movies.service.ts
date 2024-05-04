import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';
import { apiKey, serviceBaseUrl } from '../contants';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getPopularMovies() {
    return this.httpClient.get<MovieDto>(
      `${serviceBaseUrl}/movie/popular?api_key=${apiKey}`
    );
  }

  getUpcomingMovies() {
    return this.httpClient.get<MovieDto>(
      `${serviceBaseUrl}/movie/upcoming?api_key=${apiKey}`
    );
  }

  getTopRatedMovies() {
    return this.httpClient.get<MovieDto>(
      `${serviceBaseUrl}/movie/top_rated?api_key=${apiKey}`
    );
  }
}
