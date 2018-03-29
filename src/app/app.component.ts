import { Component } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
//import { ActivatedRoute } from '@angular/router';
import {AppService} from './app.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


  providers: [AppService]
})

export class AppComponent {
  title = 'app';
  value: Date;
interviewDate : String;
  constructor( 
    private my_service: AppService, private http: Http) {
}


}
