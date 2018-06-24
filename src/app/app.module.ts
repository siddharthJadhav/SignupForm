import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './componets/signup/signup.component';
import { HomeComponent } from './componets/home/home.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FormsModule } from '@angular/Forms';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ AppComponent, SignupComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DataService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
