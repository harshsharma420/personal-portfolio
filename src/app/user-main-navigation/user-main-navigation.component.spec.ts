import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainNavigationComponent } from './user-main-navigation.component';

describe('UserMainNavigationComponent', () => {
  let component: UserMainNavigationComponent;
  let fixture: ComponentFixture<UserMainNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMainNavigationComponent]
    });
    fixture = TestBed.createComponent(UserMainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
