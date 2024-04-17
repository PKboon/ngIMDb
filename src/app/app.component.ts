import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { topBar } from './shared/topBar/topBar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, topBar],
})
export class AppComponent {
  title = 'ng-flix';
}
