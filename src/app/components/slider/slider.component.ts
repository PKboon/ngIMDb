import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { imageBaseUrl } from '../../contants';
import { Movie } from '../../types/movie';

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
  @Input() slides: Movie[] = [];

  @Input() isHeader: boolean = false;

  slideIndex = 0;
  imageBaseUrl = imageBaseUrl;

  constructor() {}

  ngOnInit() {
    if (!this.isHeader) this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex = this.slideIndex > 18 ? 0 : this.slideIndex + 1;
    }, 5000);
  }
}
