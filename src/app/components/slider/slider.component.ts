import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  movies: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
