import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  
  interviewDate : String;

  constructor(public http: Http) { 
    this.http = http;

  }

 // updateDate(form: NgForm){
  //  let headers = new Headers();
   // headers.append('Content-Type', 'application/json');

   //var data = JSON.stringify({
    // interview_date : form.value.interviewDate
    //});    
    //return this.http.post("http://localhost:3000/update",data, {headers}).map(response => response.json());

  //}
}