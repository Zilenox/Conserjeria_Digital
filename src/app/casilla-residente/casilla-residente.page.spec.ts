import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasillaResidentePage } from './casilla-residente.page';

describe('CasillaResidentePage', () => {
  let component: CasillaResidentePage;
  let fixture: ComponentFixture<CasillaResidentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CasillaResidentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
