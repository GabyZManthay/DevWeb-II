import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Contato } from '../../models/contato.model';

function validarEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '').toString().trim();
    if (!value) {
      return null;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(value);
    return valid ? null : { invalidEmail: true };
  };
}

function validarEspacos(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '').toString();

    if (!value) {
      return null;
    }

    return value.trim().length === 0
      ? { onlySpaces: true }
      : null;
  };
}

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './agenda.html',
  styleUrls: ['./agenda.css']
})
export class Agenda {
  contatos: Contato[] = [];
  contatoForm: FormGroup;
  edicaoForm: FormGroup;
  idEmEdicao: number | null = null;

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), validarEspacos()]],
      telefone: ['', [Validators.required]], 
      email: ['', [Validators.required, validarEmail()]] 
    });

    this.edicaoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), validarEspacos()]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, validarEmail()]]
    });
  }

  inserirContato(): void {
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    const { nome, telefone, email } = this.contatoForm.getRawValue();

    const novoContato: Contato = {
      id: Date.now(),
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim()
    };

    this.contatos.push(novoContato);
    this.contatoForm.reset();
  }

  excluirContato(id: number): void {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.contatos = this.contatos.filter(c => c.id !== id);
      if (this.idEmEdicao === id) {
        this.cancelarEdicao();
      }
    }
  }

  iniciarEdicao(id: number): void {
    const contato = this.contatos.find(c => c.id === id);
    if (contato) {
      this.idEmEdicao = id;
      this.edicaoForm.patchValue({
        nome: contato.nome,
        telefone: contato.telefone,
        email: contato.email
      });
    }
  }

  salvarEdicao(): void {
    if (this.edicaoForm.invalid || this.idEmEdicao === null) {
      this.edicaoForm.markAllAsTouched();
      return;
    }

    const { nome, telefone, email } = this.edicaoForm.getRawValue();

    const dadosAtualizados = {
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim()
    };

    const index = this.contatos.findIndex(c => c.id === this.idEmEdicao);

    if (index !== -1) {
      this.contatos[index] = {
        ...this.contatos[index],
        ...dadosAtualizados
      };
    }

    this.cancelarEdicao();
  }

  cancelarEdicao(): void {
    this.idEmEdicao = null;
    this.edicaoForm.reset();
  }
}