import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizacaoLojaComponent } from './visualizacao-loja.component';

describe('VisualizacaoLojaComponent', () => {
  let component: VisualizacaoLojaComponent;
  let fixture: ComponentFixture<VisualizacaoLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacaoLojaComponent]
    });
    fixture = TestBed.createComponent(VisualizacaoLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
