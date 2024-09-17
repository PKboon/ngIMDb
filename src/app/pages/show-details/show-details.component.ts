import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { map, Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { AsyncPipe, JsonPipe, CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { TabViewModule } from 'primeng/tabview';
import { IMAGES_SIZES } from '../../contants';
import { Cast, Image, Video } from '../../types/media';
import { VideoFrameComponent } from '../../components/video-frame/video-frame.component';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { BannerComponent } from '../../components/banner/banner.component';
import { TvshowsService } from '../../services/tvshows.service';
import { mapToMovie, mapToMovies } from '../../types/tvShows';

@Component({
  selector: 'show-details',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    CommonModule,
    SliderComponent,
    TabViewModule,
    VideoFrameComponent,
    ImageModule,
    CarouselModule,
    BannerComponent,
  ],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss',
})
export class ShowDetailsComponent implements OnInit {
  id: number = 0;
  type: 'movie' | 'tvShow' = 'movie';

  details$: Observable<Movie> | null = null;
  imagesSizes = IMAGES_SIZES;

  videos$: Observable<Video[]> | null = null;
  images$: Observable<Image[]> | null = null;
  casts$: Observable<Cast[]> | null = null;

  similars$: Observable<Movie[]> | null = null;

  constructor(
    private router: ActivatedRoute,
    private movieService: MoviesService,
    private tvShowService: TvshowsService
  ) {}

  ngOnInit(): void {
    // Can be done by
    //
    //      this.id = this.router.snapshot.params['id']
    //
    // but it won't work if there are amny async calls
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      this.type = params['type'];
    });

    if (this.type === 'movie') this.getMovieDetails();
    else this.getTvShowDetails();
  }

  getMovieDetails() {
    this.details$ = this.movieService.getMovieById(this.id);
    this.videos$ = this.movieService.getVideosByMovieId(this.id);
    this.images$ = this.movieService.getImagesByMovieId(this.id);
    this.casts$ = this.movieService.getCastsByMovieId(this.id);
    this.similars$ = this.movieService.getSimilarByMovieId(this.id);
  }

  getTvShowDetails() {
    this.details$ = this.tvShowService
      .getTvShowById(this.id)
      .pipe(map(mapToMovie));
    this.videos$ = this.tvShowService.getVideosByTvShowId(this.id);
    this.images$ = this.tvShowService.getImagesByTvShowId(this.id);
    this.casts$ = this.tvShowService.getCastsByTvShowId(this.id);
    this.similars$ = this.tvShowService
      .getSimilarByTvShowId(this.id)
      .pipe(map(mapToMovies));
  }
}
