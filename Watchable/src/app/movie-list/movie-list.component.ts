import { Component } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  constructor (private route: ActivatedRoute){}

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{

    })

    

  }
  

  
  

}
