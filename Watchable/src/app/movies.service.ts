import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Result, resultList } from './movie-list/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovieTitle(
    search_query: string, 
    ): Observable<Result[]>{

      //TODO: Proxy requests through node backend
      const key = 'kFIB7Z9UjMLeRhJ5DdiUxr8Z1PoUFh9xvsrE2dYr';
      let url = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=' + key + '&search_value=' + search_query + '&search_type=1';
      console.log(url)
    return this.http.get<resultList>(url).pipe(map((response: resultList) => response.results));

  }
 
  getMovieInfo(
    title_id: string, 
    ){

      const key = 'kFIB7Z9UjMLeRhJ5DdiUxr8Z1PoUFh9xvsrE2dYr';
      let url = 'https://api.watchmode.com/v1/title/'+ title_id + '/details/?apiKey=' + key;

    return this.http.get(url);

    }

}
