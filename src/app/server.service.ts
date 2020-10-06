import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  getAllData(limit): Observable<any>{
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=" + limit )
  }
  getByFilter(year,landing,launch): Observable<any>{
    if(year !== " "&& landing == "" && launch == ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_year=" +year);
    } else if ( year == ""&& landing !== ""&& launch == ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&land_success="+landing);
    }else if (year == ""&& landing == ""&& launch !== ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launch);
    }else if ( year !== ""&& landing !=="" &&launch == ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year + '&land_success='+ landing);
    }else if( year !==""&& landing == ""&& launch !== ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year +'&launch_success='+ launch);
    } else if (year == ""&& landing !== ""&& launch !== ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launch+'&land_success='+landing);
    } else if ( year !== ""&& landing !== "" && launch !== ""){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+year +'&launch_success='+ launch+'&land_success='+landing)
    }
    }
  }

