import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-genero-component',
  templateUrl: './genero-component.component.html',
  styleUrls: ['./genero-component.component.css']
})
export class GeneroComponentComponent implements OnInit {

@Input()
genero:String;

  constructor() { }

  ngOnInit() {
  }

}
