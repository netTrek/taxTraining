import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { ErrorHandlingService } from '../error-handling/error-handling.service';
import { AppComponent } from '../app.component';
import { ErrorHandlingModule } from '../error-handling/error-handling.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  let service: UserService;
  let error: ErrorHandlingService;
  let testData: User[];
  let compiled: any;
  let httpMock: HttpTestingController;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, ErrorHandlingModule, RouterTestingModule],
    declarations: [AppComponent]
  }).compileComponents() );

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    service = TestBed.get(UserService);
    error = TestBed.get(ErrorHandlingService);
    httpMock = TestBed.get( HttpTestingController );
    testData = [
      {id: 1, firstname: 'saban', lastname: 'ünlü'},
      {id: 2, firstname: 'peter', lastname: 'müller'}
    ];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load user at the beginning', () => {
    // console.log ( service );
    const testRequest = httpMock.expectOne( environment.api );
    testRequest.flush( testData );
    expect( service.userList$.value ).toEqual( testData );
    console.log ( httpMock );
  });

  it('should handle error', () => {
    // console.log ( service );
    const testRequest = httpMock.expectOne( environment.api );
    testRequest.error( new ErrorEvent( 'ups'), {
      status: 404, statusText: 'service not available'
    } );
    expect( error.value ).toBe( 'could not load userlist' );
    fixture.detectChanges();
  });

  it('should render error', () => {
    // console.log ( service );
    const testRequest = httpMock.expectOne( environment.api );
    testRequest.error( new ErrorEvent( 'ups'), {
      status: 404, statusText: 'service not available'
    } );
    fixture.detectChanges();
    expect(
      compiled.querySelector('tax-error-handling span').textContent
    ).toBe( 'could not load userlist' );
  });

});
