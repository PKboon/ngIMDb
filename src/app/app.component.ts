import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './shared/topBar/topBar.component';
import { Footer } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TopBar, Footer],
})
export class AppComponent {
  title = 'ng-flix';
}
