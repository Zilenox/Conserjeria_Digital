import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorMainPage } from './administrador-main.page';

describe('AdministradorMainPage', () => {
  let component: AdministradorMainPage;
  let fixture: ComponentFixture<AdministradorMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
