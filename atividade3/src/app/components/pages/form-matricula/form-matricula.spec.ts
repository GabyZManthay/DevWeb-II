import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMatricula } from './form-matricula';

describe('FormMatricula', () => {
  let component: FormMatricula;
  let fixture: ComponentFixture<FormMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMatricula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
