import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';


@Injectable()
export class MovieDBService {
    apikey: string;

    constructor(private _jsonp: Jsonp) {
        this.apikey = '';
    }

    procuraFilme(strBusca: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + strBusca + '&sort_by=popularity.desc&api_key=' + this.apikey)
            
    }

    getFilme(id: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
            
    }
}