import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ItemFilmeComponent } from './item-filme/item-filme.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes =[
  {path: ':id', component: FilmDetailsComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    ItemFilmeComponent, 
    PagenotfoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
