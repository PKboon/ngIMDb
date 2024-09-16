import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { POPULAR, TOP_RATED, UPCOMING } from '../../contants';
import { TvshowsService } from '../../services/tvshows.service';
import { mapToMovies } from '../../types/tvShows';
import { map } from 'rxjs';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SliderComponent, BannerComponent, CommonModule],
})
export class HomeComponent {
  popularMovies$ = this.movieService.getMoviesByType(POPULAR);
  upcomingMovies$ = this.movieService.getMoviesByType(UPCOMING);
  topRatedMovies$ = this.movieService.getMoviesByType(TOP_RATED);
  popularTvShows$ = this.tvShowsService
    .getTvShowsByType(POPULAR)
    .pipe(map(mapToMovies));
  constructor(
    private movieService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}
}
