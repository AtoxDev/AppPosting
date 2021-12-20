import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';

describe('Realizando Test Unit del UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent); //creación del componente
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });



});
