import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthAPI } from '../Interfaces/AuthAPI';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "https://localhost:7295/api/"

  constructor(private http:HttpClient, private router:Router) { }

  loginAPI2(autentication: AuthAPI):Observable<AuthAPI>
  {
    let direccion = this.url + "Auth";
    return this.http.post<AuthAPI>(direccion, autentication)
  }

  // public loginAPI(loginObj:any):Promise<any>{
  //   return new Promise((resolve, reject) => {
  //      this.http.post<any>(`${this.url}Auth`,loginObj).subscribe(
  //      data => resolve(data),
  //      error => reject(error),
  //   );
   

  //   })
  // }


  storeToken(tokenValue:string){
    localStorage.setItem('token', tokenValue)
  }


  getToken(token : string){
    return localStorage.getItem(token)
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['/']);

  }



  
}
