import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public list(data: any, callback:any) { 
    return this.http.get('./../assets/ofertas.json').subscribe(
      result => { callback(result); }
    );
  }
}
