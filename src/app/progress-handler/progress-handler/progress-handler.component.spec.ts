import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHandlerComponent } from './progress-handler.component';

describe('ProgressHandlerComponent', () => {
  let component: ProgressHandlerComponent;
  let fixture: ComponentFixture<ProgressHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
