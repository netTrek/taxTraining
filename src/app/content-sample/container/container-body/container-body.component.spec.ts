import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBodyComponent } from './container-body.component';

describe('ContainerBodyComponent', () => {
  let component: ContainerBodyComponent;
  let fixture: ComponentFixture<ContainerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
