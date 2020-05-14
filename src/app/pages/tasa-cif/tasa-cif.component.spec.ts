import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasaCifComponent } from './tasa-cif.component';

describe('TasaCifComponent', () => {
  let component: TasaCifComponent;
  let fixture: ComponentFixture<TasaCifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasaCifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasaCifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
