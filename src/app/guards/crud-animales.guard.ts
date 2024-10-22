import { CanActivateFn } from '@angular/router';

export const crudAnimalesGuard: CanActivateFn = (route, state) => {
  return true;
};
