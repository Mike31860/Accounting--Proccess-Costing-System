import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractComponent } from './substract.component';

describe('SubstractComponent', () => {
  let component: SubstractComponent;
  let fixture: ComponentFixture<SubstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
