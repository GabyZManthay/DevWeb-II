import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirProduto } from './incluir-produto';

describe('IncluirProduto', () => {
  let component: IncluirProduto;
  let fixture: ComponentFixture<IncluirProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
