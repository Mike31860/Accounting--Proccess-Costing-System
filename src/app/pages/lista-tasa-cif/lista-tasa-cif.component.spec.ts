import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTasaCifComponent } from './lista-tasa-cif.component';

describe('ListaTasaCifComponent', () => {
  let component: ListaTasaCifComponent;
  let fixture: ComponentFixture<ListaTasaCifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTasaCifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTasaCifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
