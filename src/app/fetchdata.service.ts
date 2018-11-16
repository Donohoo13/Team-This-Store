import { Injectable } from '@angular/core';
// import HttpCient
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FetchdataService {

  constructor(private http:HttpClient) { }

  getData(url:string){
    return this.http.get<any[]>(url)
  }

}
