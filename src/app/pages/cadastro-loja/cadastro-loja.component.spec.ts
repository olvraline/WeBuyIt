import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLojaComponent } from './cadastro-loja.component';

describe('CadastroLojaComponent', () => {
  let component: CadastroLojaComponent;
  let fixture: ComponentFixture<CadastroLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroLojaComponent]
    });
    fixture = TestBed.createComponent(CadastroLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});