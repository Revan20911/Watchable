import { Component } from '@angular/core';

import { movies } from './movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movies = movies;
  

}
