import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';

export const crudAnimalesGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth)
  const router = inject(Router);

  if (auth.currentUser?.email == "admin@gmail.com") {
    console.log('Puede pasar: ' + auth.currentUser.email);
    return true;
  }

  console.log('No puede pasar.');
  router.navigateByUrl('error');
  return false;
};
