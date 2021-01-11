import { HttpClient } from '@angular/common/http';
import { AssertNotNull } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  id: any;
  squad = [];
  imgUrl:any;
  position= [];
  nameTeam:any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    
    console.log(this.id);
    
     $.ajax({
      headers: { 'X-Auth-Token': 'c710e33b71fe486c949abef77404ed69' },
      url: `http://api.football-data.org/v2/teams/${this.id}`,
      dataType: 'json',
      type: 'GET',
    }).done((response: any) => {
        // do something with the response, e.g. isolate the id of a linked resource   
        console.log(response);
        this.nameTeam = response.name;
        this.squad = response.squad;
        this.imgUrl = response.crestUrl;
      });
  }

  public getAge(player:any){
    var Born = new Date(player.dateOfBirth).getUTCFullYear();
    var nowYear  = new Date().getUTCFullYear();
    var Age = nowYear - Born
    return Age
  }

  public getCoach(player:any | AssertNotNull){
    if(player.role=="COACH"){
      var coach = player.name;
      return coach
    }
  }

}

