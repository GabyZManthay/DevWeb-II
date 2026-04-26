import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-matricula',
  imports: [FormsModule],
  templateUrl: './form-matricula.html',
  styleUrl: './form-matricula.css',
})
export class FormMatricula {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    // só envia se estiver válido
    if (form.valid) {

      console.log(form.value); // opcional (debug)

      // navega para a página de resultado enviando os dados
      this.router.navigate(['/resultado'], {
        state: { dados: form.value }
      });
    }
  }
}
