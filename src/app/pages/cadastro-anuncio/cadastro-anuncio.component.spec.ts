import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnuncioComponent } from './cadastro-anuncio.component';

describe('CadastroAnuncioComponent', () => {
  let component: CadastroAnuncioComponent;
  let fixture: ComponentFixture<CadastroAnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAnuncioComponent]
    });
    fixture = TestBed.createComponent(CadastroAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
