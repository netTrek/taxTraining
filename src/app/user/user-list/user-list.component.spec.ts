import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {

  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<UserListComponent>(UserListComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should have userlist', () => {
    expect(component.userList).toBeTruthy();
  });

  it('should should have userlist with one item', () => {
    expect(component.userList.length).toBe(1);
  });

  it ('should remove user to decrement', () => {
    const length = component.userList.length;
    const firstUser = component.userList[0];
    component.remove( firstUser );
    expect(component.userList.length).toBe( length - 1);
  });

  it ('should not remove not exiting user', () => {
    const length = component.userList.length;
    component.remove( {firstname: 'abc', lastname: 'def'} );
    expect(component.userList.length).toBe( length );
  });

  it ('should remove user and render list', () => {
    const length = compiled.querySelectorAll('li').length;
    const firstUser = component.userList[0];
    component.remove( firstUser );
    fixture.detectChanges();
    expect(
      compiled.querySelectorAll('li').length
    ).toBe( length - 1);
  });

  it ('should add user to increment', () => {
    const length = component.userList.length;
    component.add( 'peter', 'müller' );
    expect(component.userList.length).toBe( length + 1);
  });

  it ('should add user and render list', () => {
    const length = compiled.querySelectorAll('li').length;
    component.add( 'peter', 'müller' );
    fixture.detectChanges();
    expect(
      compiled.querySelectorAll('li').length
    ).toBe( length + 1);
  });

  it ('should add user "peter" and render it', () => {
    const length = compiled.querySelectorAll('li').length;
    component.add( 'peter', 'müller' );
    fixture.detectChanges();
    expect(
      compiled.querySelectorAll('li').item( length ).textContent
    ).toBe( 'peter' );
  });

});
