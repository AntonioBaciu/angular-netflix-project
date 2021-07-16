import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, ContentCardComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
