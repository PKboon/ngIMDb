import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-frame',
  standalone: true,
  imports: [],
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss',
})
export class VideoFrameComponent implements OnInit {
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.key}`
    );
  }
}
