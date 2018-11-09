import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../service/movieDBService';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

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

  ngOnInit() {
    //this.buscarFilmes();
    this.textoBusca.valueChanges.subscribe( campoBusca =>
      this.movieService.procuraFilme(campoBusca).subscribe(response =>{
        this.resultList = response.results
        console.log(this.resultList);  
      }))
  }

    buscarFilmes(){
      this.movieService.procuraFilme(this.stringBusca).subscribe( response =>{
        this.resultList = response;
        console.log(this.resultList);
      })
    }
    
    informacoesFilme(id){
      this.router.navigate(['/filme', id]);
    }
    
    
    

}
