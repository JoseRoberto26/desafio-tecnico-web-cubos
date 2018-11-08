import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MovieDBService {
    apikey: string;

    constructor(private http: HttpClient) {
        this.apikey = '805c1c38575578261da65b6dd5dcfc90';
    }

    procuraFilme(strBusca: string): Observable<any> {
      return  this.http.get<any>('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + strBusca + '&sort_by=popularity.desc&api_key=' + this.apikey)
    }

    getFilme(id: string) {
        
        return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
            
    }

    getTrailer(id: string): Observable<any>{
       return this.http.get<any>('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key='+this.apikey+'&language=pt-BR')
    }
}