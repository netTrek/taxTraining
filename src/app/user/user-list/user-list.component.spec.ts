import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

fdescribe('UserListComponent', () => {
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

  it ('should add user to increment', () => {
    const length = component.userList.length;
    component.add( 'peter', 'müller' );
    expect(component.userList.length).toBe( length + 1);
  });

  it ('should add user and render list', () => {
    const length = compiled.querySelectorAll('li').length;
    console.log ( compiled.querySelectorAll('li').item( length - 1 ) );
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
