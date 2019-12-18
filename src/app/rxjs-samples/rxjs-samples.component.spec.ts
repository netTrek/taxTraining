import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSamplesComponent } from './rxjs-samples.component';

describe('RxjsSamplesComponent', () => {
  let component: RxjsSamplesComponent;
  let fixture: ComponentFixture<RxjsSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
