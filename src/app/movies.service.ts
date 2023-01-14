import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

import { Result, resultList, Details, DetailsArray, sourceList, Source } from './movie-list/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

// Get search results 
  getMovieTitle(search_query: string, ):Observable<Result[]>{

    return this.http.get<resultList>(`https://watchable-io.herokuapp.com//api/search/${search_query}`)
    .pipe(map((response: resultList) => response.results ));

  }
// Get streaming sources
  getMovieInfo(
    title_id: number, 
    ): Observable<Source>{
      
      return this.http.get<Source>(`https://watchable-io.herokuapp.com//api/details/${title_id}`);

    }

// Test to make sure server connection is active. 
    getAPIStatus(){
      return this.http.get("/api/status", {responseType: 'text'});
    }

}
