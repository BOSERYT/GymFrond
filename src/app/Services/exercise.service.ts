import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../Interfaces/Exercise';
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  url:string = "https://localhost:7295/api/"

  constructor(private http:HttpClient) { }


  /**Usuarios */
  getAllExercise():Observable<Exercise[]>{
    let direccion = this.url + "Exercise";
    return this.http.get<Exercise[]>(direccion);
  }

  createExercise(Exercise:Exercise):Observable<Exercise>{
    let direccion = this.url + "Exercise";
    return this.http.post<Exercise>(direccion, Exercise);
  }

  updateExercise(form:Exercise):Observable<Exercise>{
    let direccion = this.url + "Exercise/"
    return this.http.put<Exercise>(direccion, form);
  }

  deleteExercise(form: Exercise, id:any):Observable<Exercise>{
    let direccion = this.url + "Exercise/" + id
    return this.http.delete<Exercise>(direccion)
  }

  getSingleExercise(id:any):Observable<Exercise>{
    let direccion = this.url + "Exercise/" + id;
    return this.http.get<Exercise>(direccion)
  }
}
