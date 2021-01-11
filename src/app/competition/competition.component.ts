import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  
  teams = [];
  id: any;
  activatedRoute: any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router:Router){}
 
  toTeam(team:any){

    console.log(team.id)

    this.router.navigate(['lista/'+team.id])

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    console.log(this.id);
    

  $.ajax  ({
      headers: { 'X-Auth-Token': 'c710e33b71fe486c949abef77404ed69' },
      url:`http://api.football-data.org/v2/competitions/${this.id}/teams`,
      dataType: 'json',
      type: 'GET',
    }).done((response: any) => {
        // do something with the response, e.g. isolate the id of a linked resource   
        console.log(response);
        this.teams = response.teams;
      }); 
  }

}
