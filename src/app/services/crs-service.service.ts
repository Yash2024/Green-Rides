import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cycle } from '../cycle.model';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CrsServiceService {

  constructor(private http: HttpClient) { }

  tk: string | null = localStorage.getItem("token");


  login(usr: user): Observable<any>{
    var url  = environment.apibaseurl+"/users/login";
    return this.http.post(
      url,
      usr
    )
  }

  update(usr: user){
    var url = environment.apibaseurl+"/users/"+usr._id;
    return this.http.patch(
      url,
      usr,{
        headers: new HttpHeaders({
          'Authorization': 'Bearer '+this.tk
        })
      });
  }
  
  addcycle(cyl: cycle){
    var url = environment.apibaseurl+"/cycles/add";
    return this.http.post(
      url,
      cyl
    )
  }

  submitcycle(cyl: cycle){
    var url = environment.apibaseurl+"/cycles/"+cyl.cycleid;
    return this.http.patch(
      url,
      cyl
    )
  }

  details(id: string | null){
    var url = environment.apibaseurl+"/cycles/"+id;
    return this.http.get(url);
    // return this.http.get(url)
    //   .map(res => res.json());
  }
}
