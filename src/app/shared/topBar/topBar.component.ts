import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topBar.component.html',
  styleUrl: './topBar.component.scss',
})
export class TopBar {}
