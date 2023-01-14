import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MoviesService } from '../movies.service';

import { sources, TestSources, sourceImages, sourceIMG } from '../tests_data/movies';
import { Source } from '../movie-list/interfaces';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MoviesService]
})
export class MovieDetailsComponent {

  // sources = sources;

  images = sourceImages;

  id: number = 0;

  sources: Source[] = [];

  title: string = '';
  type: string = '';
  year: number = 0;
  img: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MoviesService){}

    ngOnInit(){


        this.route.queryParams.subscribe((params: Params) =>{

          this.title = params['title'];
          this.year = params['year'];
          this.type = params['type'];
          this.img = params['img'];

              this.id = params['id'];
          
                this.service.getMovieInfo(this.id)
                .subscribe((res: any) =>{
          
                  this.sources = res;
                  console.log(this.sources);
                })
              });

    }

    getSourceImages(name: string){

      let url = '';

          for(let i = 0; i < this.images.length; i++){

            if(name == this.images[i].name){
              url = this.images[i].img_url;
            }
          }

      return url;

    }

}
