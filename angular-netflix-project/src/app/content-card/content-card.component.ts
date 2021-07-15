import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'; // always import this one ootherwise you can't use the data from the json file inside the card html
import movieData from '../../assets/data/moviesData.json';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  movies: Movie[] = movieData;
  constructor() {}

  ngOnInit(): void {}
}
