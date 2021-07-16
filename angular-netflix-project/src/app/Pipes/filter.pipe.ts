import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../movie";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Movies:Movie[], movieSearch:string): Movie[] {

    if (!Movies || !movieSearch ){
      return Movies;
    }
    return Movies.filter(movie =>
      movie.name.toLocaleLowerCase().includes(movieSearch.toLocaleLowerCase())||
      movie.releaseYear.toLocaleLowerCase().includes(movieSearch.toLocaleLowerCase()) ||
      movie.genre.toLocaleLowerCase().includes(movieSearch.toLocaleLowerCase()) ||
      movie.actors.toLocaleLowerCase().includes(movieSearch.toLocaleLowerCase())
     );
  }
}
