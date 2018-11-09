import { Component, OnInit } from '@angular/core';
import { MovieDBService } from './service/movieDBService';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'desafio-cubos';

  resultList: Array<Object>;
  stringBusca: string;
  textoBusca: FormControl = new FormControl();

  constructor(private movieService: MovieDBService, private router: Router){}

ngOnInit(){
//this.buscarFilmes();
this.textoBusca.valueChanges.subscribe( campoBusca =>
this.movieService.procuraFilme(campoBusca).subscribe(response =>{
  this.resultList = response.results
}))
}

buscarFilmes(){
  this.movieService.procuraFilme(this.stringBusca).subscribe( response =>{
    this.resultList = response;
    console.log(this.resultList);
  })
}

informacoesFilme(id: string){
  this.router.navigate(['/filme', id]);
}



}
