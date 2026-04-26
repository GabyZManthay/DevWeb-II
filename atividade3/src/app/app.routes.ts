import { Routes } from '@angular/router';
import { Home } from "./components/pages/home/home";
import { FormMatricula } from './components/pages/form-matricula/form-matricula';
import { Resultado } from './components/pages/resultado/resultado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'matricula', component: FormMatricula },
  { path:'resultado', component: Resultado }
];
