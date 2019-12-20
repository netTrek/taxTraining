import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserComponent } from './user/user.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let router: Router;
let location: Location;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: '', pathMatch: 'full', redirectTo: 'user'},
          {path: 'user', component: UserComponent}
        ]),
        UserModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.get<Router>(Router);
    location = TestBed.get<Location>(Location);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'taxTrainingTesting'`, () => {
    expect(component.title).toEqual('taxTrainingTesting');
  });

  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent)
      .toContain('hello taxTrainingTesting');
  });

  it ('should redirect to user', async () => {
    await router.navigate(['']);
    expect( location.path() ).toBe('/user');
  });

  it ('should navigate t0 user path', async () => {
    await router.navigate(['user']);
    expect( location.path() ).toBe('/user');
  });

  // fit ('should navigate tu user path', () => {
  //   router.navigate(['user']).then(
  //     n => expect( location.path() ).toBe('/user')
  //   );
  // });


});
