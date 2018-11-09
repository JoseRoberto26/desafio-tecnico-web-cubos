import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../service/movieDBService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent  {
  filme: any;
  trailer: any;

  constructor(private movieService: MovieDBService, public domSanitizer: DomSanitizer, private route: ActivatedRoute) { 
  this.route.params.subscribe(params => {
      let id =  params['idFilme'];
      console.log("id" + id);
      this.movieService.getFilme(id).subscribe(response =>{
        this.filme = response;
        console.log(this.filme);
      })
      this.movieService.getTrailer(id).subscribe(response =>{
        this.trailer = 'https://www.youtube.com/embed/' + response.results[0].key;
     console.log("trailer" + this.trailer); });
    });

  }
  
}
