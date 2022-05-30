import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/_service/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private  authenticateservice: AuthenticationService) { }
  
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Observable<boolean > | Promise<boolean> {

//    const currentUser = this.authenticateservice.currentUserValue;
  //  if (currentUser) {
        // logged in so return true
    //    return true;
   // }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }
}
