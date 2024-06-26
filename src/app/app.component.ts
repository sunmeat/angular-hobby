import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HobbyComponent } from './hobby/hobby.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HobbyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Моё странное хобби';
}
