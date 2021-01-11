import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: any[] | undefined;
  competitions = [];
  emblemUrl: any;


  constructor(private httpClient: HttpClient, private homeService:HomeService, private router:Router) { }

  toCompetition(competition:any){

    console.log(competition.id)

    this.router.navigate(['competition/'+competition.id])

  }

  ngOnInit(): void {

    this.home= this.homeService.getHome();
    jquery.ajax({
      headers: { 'X-Auth-Token': 'c710e33b71fe486c949abef77404ed69' },
      url: 'http://api.football-data.org/v2/competitions/',
      dataType: 'json',
      type: 'GET',
    }).done((response: any) => {
        // do something with the response, e.g. isolate the id of a linked resource   
        console.log('response');
        this.competitions = response.competitions;
        this.emblemUrl = response.emblemUrl;
      });
  }

}
