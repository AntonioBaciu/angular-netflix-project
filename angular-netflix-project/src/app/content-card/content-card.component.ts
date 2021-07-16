import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'; // always import this one otherwise you can't use the data from the json file inside the card html
import movieData from '../../assets/data/moviesData.json';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  movies: Movie[] = movieData;
  movieSearch= "";

  constructor(/*private http: HttpClient*/) {}

  ngOnInit(): void {
    // this.http.get('data/moviesData.json').subscribe(
    //   data=>console.log(data)
    // );
  }
}
