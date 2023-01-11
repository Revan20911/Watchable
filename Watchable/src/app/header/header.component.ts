import { Component} from '@angular/core';
import { MoviesService } from '../movies.service';
import { Result } from '../movie-list/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MoviesService]
})

export class HeaderComponent {

  constructor(private service: MoviesService){}

  SearchText: string = '';

  results: Result[] = [];
  search(SearchText: string){

    if(this.SearchText != ''){

      this.service.getMovieTitle(SearchText)
      .subscribe((res: any) =>{

        this.results = res;
      });
      
    }else{
      console.log("Empty search term");
    }
  }
}
