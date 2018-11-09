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

  

  constructor(){}

  ngOnInit(){
    
  }

}
