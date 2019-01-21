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
@Input() generos: Array<any>;
pathPosterAux: String;

  ngOnInit() {
    this.dataLancamento = moment(this.dataLancamento.toString()).format("DD/MM/YYYY");
    this.mediaNota = this.mediaNota * 10;

    console.log(this.generos);
    if(!this.pathPoster){
      this.pathPoster = "../../assets/not-found.png";
    }
    else{
      this.pathPosterAux = this.pathPoster;
      this.pathPoster = "http://image.tmdb.org/t/p/w185" +this.pathPosterAux;
    }

  }

}
