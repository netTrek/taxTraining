import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingSampleComponent } from './testing-sample.component';

describe('TestingSampleComponent', () => {
  let component: TestingSampleComponent;
  let fixture: ComponentFixture<TestingSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.name).toBe( 'saban' );
  });
});
