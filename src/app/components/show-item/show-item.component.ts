import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { imageBaseUrl } from '../../contants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'show-item',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;

  imageBaseUrl = imageBaseUrl;
}
