import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any[], filterString: string, propName:string): any[] {
   const resultArray =[];
   if (movies.length === 0 ||filterString === '' || propName === '' ){
     return movies;
   }
   for(const movie of movies){
     if (movie[propName] === filterString){
       resultArray.push(movie);
     }
   }
    return resultArray;

  }

}
