import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecycle-Tracker';
  

   logtog: boolean =true;
  
  logout(){
    localStorage.setItem("user","");
    localStorage.setItem("token","");
    this.logtog = false;
  }
}
