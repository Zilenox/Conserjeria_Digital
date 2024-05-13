import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginResidentePage } from './login-residente.page';

describe('LoginResidentePage', () => {
  let component: LoginResidentePage;
  let fixture: ComponentFixture<LoginResidentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
