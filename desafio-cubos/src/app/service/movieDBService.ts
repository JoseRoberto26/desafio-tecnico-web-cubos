import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class MovieDBService {
    apikey: string;
    baseUrlApi: string;
    constructor(private http: HttpClient, private jsonp: Jsonp) {
        //Inserir sua apikey aqui
        this.apikey = '5a240d5ac38592ee034f80a46ddeadbd';
        this.baseUrlApi  = 'https://api.themoviedb.org/3/search/movie?api_key='+this.apikey;
    }

    procuraFilme(strBusca: string): Observable<any> {
      return  this.http.get<any>(this.baseUrlApi + '&language=pt-BR&query=' +  strBusca + '&page=1');
    }

    getFilme(id): Observable<any> {
        
        return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apikey+ '&language=pt-BR');
            
    }

    getTrailer(id): Observable<any>{
       return this.http.get<any>('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key='+this.apikey+'&language=pt-BR')
    }
}