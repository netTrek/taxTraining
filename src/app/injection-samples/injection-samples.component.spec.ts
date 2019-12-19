import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionSamplesComponent } from './injection-samples.component';

describe('InjectionSamplesComponent', () => {
  let component: InjectionSamplesComponent;
  let fixture: ComponentFixture<InjectionSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectionSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
