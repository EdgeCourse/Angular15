import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; 

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); 
  const router = inject(Router);

  if (authService.isLoggedIn == true) { 
    return true; // User is logged in, allow access
  } else {
    // User is not logged in, redirect to login page
    return router.navigate(['/home']); 
  }
};
