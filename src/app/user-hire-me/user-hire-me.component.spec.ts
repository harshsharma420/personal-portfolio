import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHireMeComponent } from './user-hire-me.component';

describe('UserHireMeComponent', () => {
  let component: UserHireMeComponent;
  let fixture: ComponentFixture<UserHireMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHireMeComponent]
    });
    fixture = TestBed.createComponent(UserHireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
