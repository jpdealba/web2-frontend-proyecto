import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RoleService } from '../services/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private roleService: RoleService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole = route.data['roles'];
    const token = localStorage.getItem("token")
    // return false
    const result = new Subject<boolean>();
    if (token) {
      this.roleService.getRoles(token).subscribe((user: any) => {
        if (user.roles) {
          const found = requiredRole.some((r: any) => user.roles.indexOf(r) >= 0)
          if (found) {
            result.next(true);
          } else {
            this.router.navigate(['/forbidden']);
            result.next(false);
          }
        } else {
          this.router.navigate(['/forbidden']);
          result.next(false);
        }

        result.complete();
      },
        error => {
          this.router.navigate(['/forbidden']);
          result.next(false);
          result.complete();
        });
    } else {
      this.router.navigate(['/forbidden']);
      result.next(false);
      result.complete();
    }

    return result.asObservable();
  }

}
