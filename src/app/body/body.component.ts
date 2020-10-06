import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { ServerService} from '../server.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnChanges {
@Input() rocketData;
  constructor(private serverService:ServerService) { }
  public spaceData:any = [];
  ngOnInit(): void {
    this.getAllData();
  }
  ngOnChanges(changes: { [rocketData: string]: SimpleChange }){
    if(changes["rocketData"]){
      this.spaceData = this.rocketData;
    }

  }
  getAllData(){
    this.serverService.getAllData(100)
    .subscribe(data =>{
      this.spaceData = JSON.parse(JSON.stringify(data));
    })
  }
 
 
}
