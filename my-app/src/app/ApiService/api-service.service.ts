import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public urlBase: string;
  public ruta?: string;
  public headers?: HttpHeaders;

  constructor(private http: HttpClient) {
    this.urlBase = 'https://jsonplaceholder.typicode.com/';
  }

  /**
   ** Función para que me devuelva todos los POSTS
   **/
  public getUsers() {
    this.ruta = this.urlBase + 'users';
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')

    return this.http.get<any>(this.ruta, {observe: 'response', headers: this.headers, responseType: 'json'});
  }

  /**
   ** Función para que me devuelva todos los POSTS
   **/
  public getPosts() {
    this.ruta = this.urlBase + 'posts';
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')

    return this.http.get<any>(this.ruta, {observe: 'response', headers: this.headers, responseType: 'json'});
  }

}
