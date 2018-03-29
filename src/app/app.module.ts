import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CalendarModule} from 'primeng/calendar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  //api
import {enableProdMode} from '@angular/core';
@NgModule({
  declarations: [
    AppComponent
      ],
  imports: [
    
    BrowserModule,
    CalendarModule,
    MatDatepickerModule,        // <----- import(must)
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    BrowserAnimationsModule,
    AccordionModule
    
                     //    RouterModule.forRoot(routes, {enableTracing: true})
],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
