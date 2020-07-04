import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog6Component } from './dialog6.component';

describe('Dialog6Component', () => {
  let component: Dialog6Component;
  let fixture: ComponentFixture<Dialog6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
