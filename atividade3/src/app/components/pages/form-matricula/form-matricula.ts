import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

function senhasIguais(): ValidatorFn {
  return (control: AbstractControl) => {
    const senha = control.get('senha')?.value;
    const confirmar = control.get('confirmarSenha')?.value;

    return senha === confirmar ? null : { senhaDiferente: true };
  };
}

@Component({
  selector: 'app-form-matricula',
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './form-matricula.html',
  styleUrl: './form-matricula.css'
})

export class FormMatricula {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    idade: ['', [Validators.required, Validators.min(18)]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    confirmarSenha: ['', Validators.required],
    genero: ['', Validators.required],
    cidade: ['', Validators.required],
    termos: [false, Validators.requiredTrue],
    telefones: this.fb.array([this.criarTelefone(true)])
  }, { validators: [senhasIguais()] });

  criarTelefone(obrigatorio: boolean = false) {
    return this.fb.group({
      numero: [
        '',
        obrigatorio ? Validators.required : []
      ]
    });
  }

  get telefones(): FormArray {
    return this.form.get('telefones') as FormArray;
  }

  adicionarTelefone() {
    this.telefones.push(this.criarTelefone(false));
  }

  removerTelefone(index: number) {
    if (this.telefones.length > 1) {
      this.telefones.removeAt(index);
    }
  }

  sucesso = false;
  
  cadastrar(){
    if(this.form.valid){

      localStorage.setItem(
        'matricula',
        JSON.stringify(this.form.value)
      );

      this.sucesso = true;

      setTimeout(() => {
        this.router.navigate(['/resultado']);
      }, 1200);

    }

  }

  get nome() { return this.form.get('nome'); }
  get email() { return this.form.get('email'); }
  get idade() { return this.form.get('idade'); }
  get senha() { return this.form.get('senha'); }
  get confirmarSenha() { return this.form.get('confirmarSenha'); }
  get genero() { return this.form.get('genero'); }
  get cidade() { return this.form.get('cidade'); }
  get termos() { return this.form.get('termos'); }

  mostrarSenha = false;
  mostrarConfirmarSenha = false;

  get nivelSenha(): string {

    const senha = this.senha?.value || '';

    if (senha.length < 6) return 'Fraca';

    const temNumero = /\d/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);
    const temEspecial = /[^A-Za-z0-9]/.test(senha);

    if (temNumero && temMaiuscula && temEspecial) {
      return 'Forte';
    }

    return 'Média';
  }

  get porcentagemSenha(): number {

    if (this.nivelSenha === 'Fraca') return 33;
    if (this.nivelSenha === 'Média') return 66;
    return 100;
  }

  get corSenha(): string {

    if (this.nivelSenha === 'Fraca') return '#dc3545';
    if (this.nivelSenha === 'Média') return '#ffc107';
    return '#198754';
  }
}