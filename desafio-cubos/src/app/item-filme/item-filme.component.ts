import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-item-filme',
  templateUrl: './item-filme.component.html',
  styleUrls: ['./item-filme.component.css']
})
export class ItemFilmeComponent implements OnInit {

  constructor() { }
  @Input() tituloFilme: String;
@Input() dataLancamento: String;
@Input() idFilme: number;
@Input() sinopseFilme: String;
@Input() pathPoster: String;
@Input() mediaNota: number;
@Input() contagemVoto: number;
@Input() idsGeneros: Array<any>;
@Input() generos: Array<any>;
pathPosterAux: String;
generosDoFilme: Array<String>;

  ngOnInit() {
    this.generosDoFilme = [];
    this.dataLancamento = moment(this.dataLancamento.toString()).format("DD/MM/YYYY");
    this.mediaNota = this.mediaNota * 10;
    this.idsGeneros.forEach(id =>{
      this.checaGenero(id);
    })
    if(!this.pathPoster){
      this.pathPoster = "../../assets/not-found.png";
    }
    else{
      this.pathPosterAux = this.pathPoster;
      this.pathPoster = "http://image.tmdb.org/t/p/w185" +this.pathPosterAux;
    }
  }
  checaGenero(id: number){
    this.generos.forEach(genero =>{
      if(genero.id == id){
        this.generosDoFilme.push(genero.name);
      }
    })
  }

  

}
