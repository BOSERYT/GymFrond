import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles } from '../Interfaces/Roles';

 
@Injectable({
  providedIn: 'root'
})




export class ApiServiceService {

  url:string = "https://localhost:7295/api/"

  constructor(private http:HttpClient) { 
  }


  roles(rol:any){
    return this.http.get<any>(`${this.url}Users/roles`,rol)
  }


  /**Roles */
  getAllRoles():Observable<Roles[]>{
   
    let direccion = this.url + "roles";
    return this.http.get<Roles[]>(direccion);
  }

  createRole(rol:Roles):Observable<Roles>{
    let direccion = this.url + "roles";
      return this.http.post<Roles>(direccion,rol)
    }
  
  updateRole(form:Roles):Observable<Roles>{
    let direccion = this.url + "roles/"
    return this.http.put<Roles>(direccion,form)
  }

  deleteRole(form: Roles, id:any):Observable<Roles>{
    let direccion = this.url + "roles/" + id
    return this.http.delete<Roles>(direccion)
  }

  getSingleRole(id:any):Observable<Roles>{
    let direccion = this.url + "roles/" + id;
    return this.http.get<Roles>(direccion)
  }

}


