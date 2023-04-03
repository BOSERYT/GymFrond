import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../Interfaces/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:string = "https://localhost:7295/api/"

  constructor(private http:HttpClient) { }


  /**Usuarios */
  getAllUsers():Observable<Usuarios[]>{
    let direccion = this.url + "Users";
    return this.http.get<Usuarios[]>(direccion);
  }

  createUsers(user:Usuarios):Observable<Usuarios>{
    let direccion = this.url + "Users";
    return this.http.post<Usuarios>(direccion, user);
  }

  updateUser(form:Usuarios):Observable<Usuarios>{
    let direccion = this.url + "users/"
    return this.http.put<Usuarios>(direccion, form);
  }

  deleteUser(form: Usuarios, id:any):Observable<Usuarios>{
    let direccion = this.url + "users/" + id
    return this.http.delete<Usuarios>(direccion)
  }

  getSingleUser(id:any):Observable<Usuarios>{
    let direccion = this.url + "users/" + id;
    return this.http.get<Usuarios>(direccion)
  }
}
