import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceX';
  public rocketData: any;
  getEmitedData(data){
  this.rocketData= data;
  }
}
