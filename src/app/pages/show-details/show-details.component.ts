import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { AsyncPipe, JsonPipe, CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CommonModule, SliderComponent],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss',
})
export class ShowDetailsComponent implements OnInit {
  id: number = 0;
  details$: Observable<Movie> | null = null;
  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    // Can be done by
    //
    //      this.id = this.router.snapshot.params['id']
    //
    // but it won't work if there are amny async calls
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.details$ = this.movieService.getMovieById(this.id);
  }
}
