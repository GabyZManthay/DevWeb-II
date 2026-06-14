import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Produto } from './pages/produto/produto';
import { Login } from './pages/login/login';
import { Perfil } from './pages/perfil/perfil';
import { Checkout } from './pages/checkout/checkout';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'perfil', component: Perfil, canActivate: [authGuard] },
  { path: 'produto/:id', component: Produto, canActivate: [authGuard] },
  { path: 'checkout', component: Checkout, canActivate: [authGuard] }
];
