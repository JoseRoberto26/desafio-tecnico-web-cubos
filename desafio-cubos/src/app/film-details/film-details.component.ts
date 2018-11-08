import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../service/movieDBService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  filme: any;
  trailer: any;
  id: string;

  constructor(private movieService: MovieDBService, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.movieService.getFilme(this.id).subscribe(response =>{
        this.filme = response;
      })
      this.movieService.getTrailer(this.id).subscribe(response =>{
        this.trailer = 'https://www.youtube.com/embed/' + response.results[0].key;
      })
    })

  }

  ngOnInit() {
  }

  
}
