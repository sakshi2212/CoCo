import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog9Component } from './dialog9.component';

describe('Dialog9Component', () => {
  let component: Dialog9Component;
  let fixture: ComponentFixture<Dialog9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
