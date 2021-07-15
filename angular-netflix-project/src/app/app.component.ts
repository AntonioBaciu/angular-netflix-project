import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// interface Movie {
//   image: String;
//   name: String;
//   releaseYear: String;
//   genre: String;
//   duration: String;
//   actors: String;
//   storyLine: String;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Netflix Project';
}
