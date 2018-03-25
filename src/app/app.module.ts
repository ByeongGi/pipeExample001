import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessegePipe } from './messege.pipe';
import { CommomMessegeService } from './commom-messege.service';


@NgModule({
  declarations: [
    AppComponent,
    MessegePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommomMessegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
