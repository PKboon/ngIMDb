import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getPopularMovies() {
    return this.httpClient.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=c41d087a09490c731ad89deea7713c80'
    );
  }
}
