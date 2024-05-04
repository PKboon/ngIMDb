import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { POPULAR, imageBaseUrl } from '../../contants';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  movies$ = this.moviesService.getMoviesByType(POPULAR);
  slideIndex = 0;
  imageBaseUrl = imageBaseUrl;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    setInterval(() => {
      this.slideIndex = this.slideIndex > 18 ? 0 : this.slideIndex + 1;
    }, 5000);
  }
}
