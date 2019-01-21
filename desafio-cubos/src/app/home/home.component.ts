import { Component, OnInit, Output } from '@angular/core';
import { MovieDBService } from '../service/movieDBService';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieDBService, private router: Router) { }
  
  resultList: Array<Object>;
  stringBusca: string;
  textoBusca: FormControl = new FormControl();
  idFilme: String; 
  p: number = 1;
  dataFormatada;
  generos: Array<any>;
  @Output() todosGeneros: Array<any>;

  ngOnInit() {
    this.textoBusca.valueChanges.subscribe( campoBusca =>
      this.movieService.procuraFilme(campoBusca).subscribe(response =>{
        this.resultList = response.results
        //console.log(this.resultList);
      }))

      this.movieService.getGeneros().subscribe(response => {
        this.todosGeneros = response.genres;
       // console.log(this.todosGeneros);
      })
      
  }


    informacoesFilme(id){
      this.router.navigate(['/filme', id]);
    }
    
}
