import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'search/:SearchText', component: MovieListComponent},
    //{path: 'Movies/:movieId', component: MovieDetailsComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
