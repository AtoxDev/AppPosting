import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../ApiService/api-service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public error: any;
  public errorClass: any;
  public capa: any;
  public idUser : any;
  public postCreate: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiServiceService) {
    this.errorClass = '';
    this.capa = '';
    this.error = {
      title : '',
      message : '',
      btn: ''
    }
    this.postCreate = {
      title : '',
      body: ''
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idUser = params['idUser'];
    });
  }

  public back() {
    this.router.navigate(['/posts'], { queryParams: {'idUser' : this.idUser} });
  }

  public savePost(postCreate : any) {
    const body = {
      title: postCreate.title,
      body: postCreate.body,
      userId: this.idUser
    }

    this.api.createNewPost(body).subscribe({
      next: (res: any) => {
        this.capa = 'capa';
        this.errorClass = 'animation-modal-error';
        this.error.title = '¡GENIAL!';
        this.error.message = 'Sus cambios han sido guardados correctamente...NOTA: DEBIDO A QUE ES UNA API EXTERNA LOS CAMBIOS NO ' +
          'SE VERÁN REFLEJADOS. ';
        this.error.btn = 'OK';
      },
      error: (err) => {
        this.capa = 'capa';
        this.errorClass = 'animation-modal-error';
        this.error.title = 'Oops';
        this.error.message = 'Ha ocurrido un error a la hora de devolver los datos';
        this.error.btn = 'OK';
      }
    });
  }

  public ok() {
    this.errorClass = '';
    this.capa = '';
    this.router.navigate(['/posts'], { queryParams: {
        'idUser': this.idUser} });
  }

  public close() {
    this.errorClass = '';
    this.capa = '';
  }
}
