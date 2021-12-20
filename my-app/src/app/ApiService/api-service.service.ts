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
  public getPosts(id: any) {
    this.ruta = this.urlBase + 'users/'+id+'/posts';
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')

    return this.http.get<any>(this.ruta, {observe: 'response', headers: this.headers, responseType: 'json'});
  }

  /**
   ** Función para que me devuelva un POST POR ID
   **/
  public getPostsbyId(id: any) {
    this.ruta = this.urlBase + 'posts/'+id;
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')

    return this.http.get<any>(this.ruta, {observe: 'response', headers: this.headers, responseType: 'json'});
  }

  /**
   ** Función para editar un post por ID
   **/
  public getEditPOSTbyID(params: any) {
    this.ruta = this.urlBase + 'posts/'+params.id;
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')
    const body = {
      'id' : params.id === undefined ? params.id = '' : params.id = params.id.toString(),
      'title': params.title === undefined ? params.title = '' : params.title = params.title.toString(),
      'body': params.body === undefined ? params.body = '' : params.body = params.body.toString(),
      'userId': params.userId === undefined ? params.userId = '' : params.userId = params.userId.toString(),
    };
    return this.http.put<any>(this.ruta, body, {observe: 'response', headers: this.headers, responseType: 'json'});
  }

  /**
   ** Función para que me devuelva todos los Comments
   **/
  public getComments(id: any) {
    this.ruta = this.urlBase + 'posts/'+id+'/comments';
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')

    return this.http.get<any>(this.ruta, {observe: 'response', headers: this.headers, responseType: 'json'});
  }

  /**
   ** CREANDO UN NUEVO POST
   **/
  public createNewPost(params: any) {
    this.ruta = this.urlBase + 'posts/';
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'es-ES,es;q=0.8')
    const body = {
      'title': params.title === undefined ? params.title = '' : params.title = params.title.toString(),
      'body': params.body === undefined ? params.body = '' : params.body = params.body.toString(),
      'userId': params.userId === undefined ? params.userId = '' : params.userId = params.userId.toString(),
    };
    return this.http.post<any>(this.ruta, body, {observe: 'response', headers: this.headers, responseType: 'json'});
  }


}
