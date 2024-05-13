import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginConserjePage } from './login-conserje.page';

describe('LoginConserjePage', () => {
  let component: LoginConserjePage;
  let fixture: ComponentFixture<LoginConserjePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginConserjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
