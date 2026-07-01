import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCategoria } from './incluir-categoria';

describe('IncluirCategoria', () => {
  let component: IncluirCategoria;
  let fixture: ComponentFixture<IncluirCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirCategoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
