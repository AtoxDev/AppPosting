import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  class ActivatedRouteMock {
    queryParams = new Observable(observer => {
       const urlParams = {
          param1: 'some',
          param2: 'params'
       }
       observer.next(urlParams);
       observer.complete();
    });
 }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: Router, useValue: 'value' },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creando Test en createComponent', () => {
    expect(component).toBeTruthy();
  });
});
