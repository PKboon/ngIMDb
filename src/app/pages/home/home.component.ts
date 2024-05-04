import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { TOP_RATED, UPCOMING } from '../../contants';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SliderComponent, BannerComponent, CommonModule],
})
export class HomeComponent {
  upcomingMovies$ = this.movieService.getMoviesByType(UPCOMING);
  topRatedMovies$ = this.movieService.getMoviesByType(TOP_RATED);
  constructor(private movieService: MoviesService) {}
}
