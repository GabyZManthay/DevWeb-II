import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<any> = (component: any
) => {
  if (
    component?.formAlterado
  ) {
    return confirm(
      'Deseja sair sem salvar?'
    );
  }

  return true;
};