import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../ApiService/api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public listUsers = [];
  public listUsersTmp = [];
  public error: any;
  public errorClass: any;
  public capa: any;
  public user: any;
  public animationDetails: any;
  public buscarThings: any;

  constructor(private api: ApiServiceService, private router: Router) {
    this.errorClass = '';
    this.capa = '';
    this.user = {};
    this.error = {
      title : '',
      message : '',
      btn: ''
    }
  }

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (res: any) => {
        this.capa = '';
        this.errorClass = '';
        this.listUsers = res.body;
        this.listUsersTmp = res.body;
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

  public detail(users: any) {
    this.user = {
      id : users.id,
      name: users.name,
      username : users.username,
      email : users.email,
      street: users.address.street,
      suite: users.address.suite,
      city: users.address.city,
      zipcode: users.address.zipcode,
      phone: users.phone,
      website: users.website,
      company: users.company.name
    }
    this.capa = 'capa';
    this.animationDetails = 'animation-modal-details';
  }

  public close() {
    this.errorClass = '';
    this.capa = '';
    this.animationDetails = '';
  }

  public getFind(e: KeyboardEvent) {
    // @ts-ignore
    if (e.target.value !== '' && e.which !== 8) {
      this.listUsers = this.listUsers.filter(res => {
        // tslint:disable-next-line:max-line-length
        // @ts-ignore
        return res['name'].toLowerCase().match(e.target.value.toLowerCase()) || res['email'].toLowerCase().match(e.target.value.toLowerCase());
      });
    } else if (e.which === 8) {
      this.listUsers = this.listUsersTmp.filter(res => {
        // tslint:disable-next-line:max-line-length
        // @ts-ignore
        return res['name'].toLowerCase().match(e.target.value.toLowerCase()) || res['email'].toLowerCase().match(e.target.value.toLowerCase());
      });
    }
  }

  public create(uri: any) {
      this.router.navigate(['/create-new-post'], { queryParams: {
          'idUser': uri } });
  }

  public redirectTo(uri: any) {
      this.router.navigate(['/posts'], { queryParams: { 'idUser': uri } });
  }


}
