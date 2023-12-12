import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePublicacionPage } from './detalle-publicacion.page';

describe('DetallePublicacionPage', () => {
  let component: DetallePublicacionPage;
  let fixture: ComponentFixture<DetallePublicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallePublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
