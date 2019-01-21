import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../service/movieDBService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent {
  filme: any;
  trailer: any;
  dataFormatada;
  generos: Array<any>;
  lucroFilme;
  status;
  idioma;
  mediaNota;

  constructor(private movieService: MovieDBService, public domSanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['idFilme'];
      this.movieService.getFilme(id).subscribe(response => {
        this.filme = response;
        this.mediaNota = this.filme.vote_average * 10;
        if(this.filme.original_language == "en"){
            this.idioma = "Inglês";
        }
        else if(this.filme.original_language == "fr"){
          this.idioma = "Francês";
        }
        else if(this.filme.original_language == "es"){
          this.idioma = "Espanhol";
        }
        else if(this.filme.original_language == "ru"){
          this.idioma == "Russo";
        }
        else if(this.filme.original_language == "pt"){
          this.idioma == "Português";
        } 
        this.generos = this.filme.genres;
        this.dataFormatada = moment(this.filme.release_date.toString()).format("DD/MM/YYYY");
        this.lucroFilme = this.filme.revenue - this.filme.budget;
        if(this.filme.status == "Released"){
          this.status = "Lançado";
        }
        else if (this.filme.status == "Post Production"){
          this.status = "Pós-Produção";
        }
      })
      this.movieService.getTrailer(id).subscribe(response => {
        console.log(response);
        response.results.forEach(trailer => {
          if(trailer){
            this.trailer = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+trailer.key);
            //'https://www.youtube.com/embed/'+trailer.key;
          }
        })
      });
    });

  }
  
}
