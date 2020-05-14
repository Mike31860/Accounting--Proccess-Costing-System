import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrealComponent } from "./cifrealComponent";

describe('CifrealComponent', () => {
  let component: CifrealComponent;
  let fixture: ComponentFixture<CifrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
