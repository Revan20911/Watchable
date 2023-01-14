import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MoviesService]
})
export class MovieDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MoviesService){}

    ngOnInit(){

      this.route.queryParamMap.subscribe((res: any) =>{
        
      })

    }

}
