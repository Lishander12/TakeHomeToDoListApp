import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistService } from 'src/services/to-do-list.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, FormsModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
