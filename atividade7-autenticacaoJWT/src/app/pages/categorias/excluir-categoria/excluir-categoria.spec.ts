import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCategoria } from './excluir-categoria';

describe('ExcluirCategoria', () => {
  let component: ExcluirCategoria;
  let fixture: ComponentFixture<ExcluirCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCategoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
