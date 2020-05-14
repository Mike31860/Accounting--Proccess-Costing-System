import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCifRealesComponent } from './lista-cif-reales.component';

describe('ListaCifRealesComponent', () => {
  let component: ListaCifRealesComponent;
  let fixture: ComponentFixture<ListaCifRealesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCifRealesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCifRealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
