import { Component, Input } from '@angular/core';
import { ShowItemComponent } from '../show-item/show-item.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../../types/movie';

@Component({
  selector: 'banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  imports: [ShowItemComponent, CommonModule],
})
export class BannerComponent {
  @Input() title: string = '';

  @Input() shows: Movie[] = [];

  @Input() type: 'movie' | 'tvShow' = 'movie';
}
