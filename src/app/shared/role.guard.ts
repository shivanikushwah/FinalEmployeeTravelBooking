import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(){
    let role=localStorage.getItem('role');
    if (role=='ADMIN'){
      return true
    }
    else{
      alert("you dont have admin rights");
      this.router.navigateByUrl('/Auth')
      return false
      
    }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
  
}
  
}
