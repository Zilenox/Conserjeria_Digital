import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConserjeMainPage } from './conserje-main.page';

describe('ConserjeMainPage', () => {
  let component: ConserjeMainPage;
  let fixture: ComponentFixture<ConserjeMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConserjeMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
