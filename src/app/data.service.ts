import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { reject, resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData1:any;
  constructor(private http:HttpClient) { }
  adddata(value){
    return this.http.post('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/employdata',value).toPromise()
    .then((data)=>{
      resolve(data)
    })
   }
   getData(){
    return this.http.get('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/employdata')
    .pipe(map(data=>this.getData1=data))
  }
  del(value){
    return this.http.delete('https://5cc8890e2dcd9d0014769060.mockapi.io/api/v1/employdata/'+value,)
    .pipe(map(data=>this.getData1=data))
  }
}
