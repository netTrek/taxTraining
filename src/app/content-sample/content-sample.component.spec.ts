import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSampleComponent } from './content-sample.component';

describe('ContentSampleComponent', () => {
  let component: ContentSampleComponent;
  let fixture: ComponentFixture<ContentSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
