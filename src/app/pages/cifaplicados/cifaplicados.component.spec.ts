import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifaplicadosComponent } from './cifaplicados.component';

describe('CifaplicadosComponent', () => {
  let component: CifaplicadosComponent;
  let fixture: ComponentFixture<CifaplicadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifaplicadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifaplicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
