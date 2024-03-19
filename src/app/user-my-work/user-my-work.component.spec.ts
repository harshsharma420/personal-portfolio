import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyWorkComponent } from './user-my-work.component';

describe('UserMyWorkComponent', () => {
  let component: UserMyWorkComponent;
  let fixture: ComponentFixture<UserMyWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMyWorkComponent]
    });
    fixture = TestBed.createComponent(UserMyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
