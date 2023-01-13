import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { MoviesService } from '../movies.service';
import { resultList, Result } from './interfaces';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MoviesService]
  
})
export class MovieListComponent {

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private service: MoviesService
    ){}

  // TODO: Pass search result info into component from header

  searchQuery: string = '';

  results: Result[] = [];

  status: any[] = [];

  ngOnInit() {

    this.route.queryParams.subscribe((params: Params) =>{

      this.searchQuery = params['query'];

      if(this.searchQuery != ''){

        this.service.getMovieTitle(this.searchQuery)
        .subscribe((res: any) =>{
  
          this.results = res;
          console.log(this.results);
        })
      };
      
    })

    this.service.getAPIStatus().subscribe((res: any) =>{

      this.status = res;
      console.log(res);

    })

    console.log(this.status);

  }

  movieDetails(id: number, type: string){

    if(type == 'tv_series'){

      this.router.navigate(['tv_series/'], {
        
        queryParams:{
          id: id
        },
        queryParamsHandling: 'merge',
        skipLocationChange: false
      })
    }

    else if (type == 'movie'){

      this.router.navigate(['movies/'], {
        
        queryParams:{
          id: id
        },
        queryParamsHandling: 'merge',
        skipLocationChange: false
      })
  
    } 
  }

}
