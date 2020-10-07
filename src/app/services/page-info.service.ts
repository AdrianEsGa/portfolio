import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PageInfoInterface} from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})

export class PageInfoService {

  info: PageInfoInterface = {};
  loaded = false;

  constructor( private http: HttpClient) {

     console.log('Info page service');

     this.http.get('assets/data/data-page.json')
       .subscribe( (resp: PageInfoInterface) => {
         this.loaded = true;
         this.info = resp;
       });
  }
}
