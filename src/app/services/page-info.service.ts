import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PageInfoInterface} from '../interfaces/page-info.interface';
import {TeamInfoInterface} from '../interfaces/team-info.interface';

@Injectable({
  providedIn: 'root'
})

export class PageInfoService {

  info: PageInfoInterface = {};
  team: TeamInfoInterface[] = [];
  loaded = false;

  constructor( private http: HttpClient) {

     console.log('Info page service');
     this.loadInfo();
     this.loadTeam();
  }
  private loadInfo(){
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: PageInfoInterface) => {
        this.loaded = true;
        this.info = resp;
        console.log(resp);
      });
  }
  private loadTeam(){
      this.http.get(' https://portfolio-751cd.firebaseio.com/team.json')
        .subscribe( (resp: TeamInfoInterface []) => {
          this.loaded = true;
          this.team = resp;
          console.log(resp);
        });
  }
}
