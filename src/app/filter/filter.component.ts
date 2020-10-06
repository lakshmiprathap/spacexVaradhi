import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public years = [ 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
public boolean = [ "true", "false"]
public year = "";
public land = "";
public launch = ""
  constructor( private serverService :ServerService) { }
@Output() outputData = new EventEmitter();
public emitData:any;
  ngOnInit(): void {
  }
  setFilter(value,type){
    if(type == 'year'){
      this.year = value
  
    }
    else if(type == "launch"){
      this.launch = value
    }
    else{
      this.land = value
    }
    this.serverService.getByFilter(this.year,this.land,this.launch)
    .subscribe(data => {
      this.emitData = JSON.parse(JSON.stringify(data));
      this.outputData.emit(this.emitData);
    })

  }
}