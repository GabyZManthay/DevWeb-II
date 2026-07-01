import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirProduto } from './excluir-produto';

describe('ExcluirProduto', () => {
  let component: ExcluirProduto;
  let fixture: ComponentFixture<ExcluirProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
