import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSampleComponent } from './view-sample.component';

describe('ViewSampleComponent', () => {
  let component: ViewSampleComponent;
  let fixture: ComponentFixture<ViewSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
