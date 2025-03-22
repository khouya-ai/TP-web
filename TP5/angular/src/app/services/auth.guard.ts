import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "./users.service";

export const authGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UsersService);
  const router = inject(Router);

  if (usersService.isUserAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
