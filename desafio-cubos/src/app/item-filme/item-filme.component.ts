import { Component, OnInit, Input } from '@angular/core';

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
@Input() idsGeneros: Array<number>;

  ngOnInit() {
    this.mediaNota = this.mediaNota * 10;
    if(!this.sinopseFilme){
      this.sinopseFilme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }
  }

}
