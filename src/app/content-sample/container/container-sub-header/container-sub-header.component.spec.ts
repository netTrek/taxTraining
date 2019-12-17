import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSubHeaderComponent } from './container-sub-header.component';

describe('ContainerSubHeaderComponent', () => {
  let component: ContainerSubHeaderComponent;
  let fixture: ComponentFixture<ContainerSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
