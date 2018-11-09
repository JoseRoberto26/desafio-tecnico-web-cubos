import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ItemFilmeComponent } from './item-filme/item-filme.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MovieDBService } from './service/movieDBService';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GeneroComponentComponent } from './shared/genero-component/genero-component.component';
import { ScoreComponentComponent } from './shared/score-component/score-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    ItemFilmeComponent, 
    PagenotfoundComponent, HomeComponent, HeaderComponent, GeneroComponentComponent, ScoreComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  providers: [MovieDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
