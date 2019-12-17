import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingSamplesComponent } from './binding-samples.component';

describe('BindingSamplesComponent', () => {
  let component: BindingSamplesComponent;
  let fixture: ComponentFixture<BindingSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
