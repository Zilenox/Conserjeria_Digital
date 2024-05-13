import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaEntradaPage } from './nueva-entrada.page';

describe('NuevaEntradaPage', () => {
  let component: NuevaEntradaPage;
  let fixture: ComponentFixture<NuevaEntradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
