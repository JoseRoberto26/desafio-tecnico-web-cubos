import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { ItemFilmeComponent } from './item-filme/item-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    ItemFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
