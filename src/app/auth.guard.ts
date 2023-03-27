import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}


  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Aún no inicias sesión',
      })
      this.router.navigate(['login']);

      return false;
     
    }
  }
  
}
