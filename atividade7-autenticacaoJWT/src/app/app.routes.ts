import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { canDeactivateGuard } from './core/guards/can-deactivate-guard';
import { Produtos } from './pages/produtos/produtos';
import { Login } from './pages/login/login';
import { Categorias } from './pages/categorias/categorias';
import { IncluirProduto } from './pages/produtos/incluir-produto/incluir-produto';
import { EditarProduto } from './pages/produtos/editar-produto/editar-produto';
import { ExcluirProduto } from './pages/produtos/excluir-produto/excluir-produto';
import { EditarCategoria } from './pages/categorias/editar-categoria/editar-categoria';
import { IncluirCategoria } from './pages/categorias/incluir-categoria/incluir-categoria';
import { ExcluirCategoria } from './pages/categorias/excluir-categoria/excluir-categoria';

export const routes: Routes = [
    { path:'', redirectTo:'login', pathMatch:'full' },
    { path:'login', component:Login },
    { path:'produtos', component:Produtos, canActivate:[ authGuard ] },
    { path:'produtos/incluir', component:IncluirProduto, canActivate:[ authGuard ], canDeactivate:[ canDeactivateGuard ] },
    { path:'produtos/editar', component:EditarProduto, canActivate:[ authGuard ], canDeactivate:[ canDeactivateGuard ] },
    { path:'produtos/excluir', component:ExcluirProduto, canActivate:[ authGuard ] },
    { path:'categorias', component:Categorias, canActivate:[ authGuard ] },
    { path:'categorias/incluir', component:IncluirCategoria, canActivate:[ authGuard ], canDeactivate:[ canDeactivateGuard ] },
    { path:'categorias/editar', component:EditarCategoria, canActivate:[ authGuard ], canDeactivate:[ canDeactivateGuard ] },
    { path:'categorias/excluir', component:ExcluirCategoria, canActivate:[ authGuard ] }
];
