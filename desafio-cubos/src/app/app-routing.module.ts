import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ItemFilmeComponent } from './item-filme/item-filme.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'filme/:idFilme', component: FilmDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
