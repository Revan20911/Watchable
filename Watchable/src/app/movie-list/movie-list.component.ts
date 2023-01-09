import { Component } from '@angular/core';

import { movies } from './movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  
  // TODO: Fetch movies using back-end connection for database
  movies = movies;
  

}
