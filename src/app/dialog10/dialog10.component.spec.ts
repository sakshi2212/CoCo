import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog10Component } from './dialog10.component';

describe('Dialog10Component', () => {
  let component: Dialog10Component;
  let fixture: ComponentFixture<Dialog10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
