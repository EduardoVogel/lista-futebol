
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lista-futebol';

  headers:any;

  constructor( ) { }

  ngOnInit(): void {
     console.log('olá');
}
//c710e33b71fe486c949abef77404ed69 //romulo.rps@hotmail.com
}
