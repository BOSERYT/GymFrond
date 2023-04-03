import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medical } from '../Interfaces/Medical';


@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  url:string = "https://localhost:7295/api/"

  constructor(private http:HttpClient) { }


  /**Usuarios */
  getAllMedicalAssessment():Observable<Medical[]>{
    let direccion = this.url + "MedicalAssessment";
    return this.http.get<Medical[]>(direccion);
  }

  createMedicalAssessment(MedicalAssessment:Medical):Observable<Medical>{
    let direccion = this.url + "MedicalAssessment";
    return this.http.post<Medical>(direccion, MedicalAssessment);
  }

  updateMedicalAssessment(form:Medical):Observable<Medical>{
    let direccion = this.url + "MedicalAssessment/"
    return this.http.put<Medical>(direccion, form);
  }

  deleteMedicalAssessment(form: Medical, id:any):Observable<Medical>{
    let direccion = this.url + "MedicalAssessment/" + id
    return this.http.delete<Medical>(direccion)
  }

  getSingleMedicalAssessment(id:any):Observable<Medical>{
    let direccion = this.url + "MedicalAssessment/" + id;
    return this.http.get<Medical>(direccion)
  }
}
