import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  queryGetAdministrator(route: string) {
    console.log((route));
     this.http.get((route)
    ).subscribe(data =>{
      console.log(data)
    },error =>  console.log(error));

    /* let startAll = this.http.get(environment.apiUrl.concat(route)) */
  }
}
