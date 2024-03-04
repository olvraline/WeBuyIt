import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTelaComponent } from './principal-tela.component';

describe('PrincipalTelaComponent', () => {
  let component: PrincipalTelaComponent;
  let fixture: ComponentFixture<PrincipalTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalTelaComponent]
    });
    fixture = TestBed.createComponent(PrincipalTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
