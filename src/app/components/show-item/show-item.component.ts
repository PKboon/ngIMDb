import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { CommonModule } from '@angular/common';
import { imageBaseUrl } from '../../contants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'show-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;

  @Input() type: 'movie' | 'tvShow' = 'movie';

  imageBaseUrl = imageBaseUrl;
}
