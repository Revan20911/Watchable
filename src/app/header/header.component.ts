import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  constructor(
    private router: Router, 
    private route: ActivatedRoute
    ){}

  SearchText: string = '';

  search(SearchText: string){

    if(this.SearchText != ''){

      this.router.navigate(['search/'], {
        relativeTo: this.route,
        queryParams:{
          query: SearchText
        },
        queryParamsHandling: 'merge',
        skipLocationChange: false
      })



      
    }else{
      console.log("Empty search term");
    }
  }
}
