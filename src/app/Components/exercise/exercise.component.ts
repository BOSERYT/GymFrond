import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/Interfaces/Exercise';
import { ExerciseService } from 'src/app/Services/exercise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  exerciseForm! : FormGroup;

  constructor(private fb: FormBuilder,private api:ExerciseService, private router: Router){}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      name_exercise: ['', Validators.required ],
      series: ['', Validators.required ],
      repetions: ['', Validators.required ],
      pictures: ['', Validators.required ],
      routine_id: ['', Validators.required ],
      available: ['', Validators.required ],
    })
  }

  onCreateExercise(){
    if(this.exerciseForm.valid){
      //Enviar a la BD
      this.api.createExercise(this.exerciseForm.value)
      .subscribe({
        next:(res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuairo guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.exerciseForm.reset();
          this.router.navigate(['users']);
        }),
        error:(err)=>{
          alert(err.error.message)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que hubo un error',
            footer: 'Inténtalo de nuevo'
          })
        }
      })

    }else{
      this.validateAll(this.exerciseForm);
      console.log("No valido");
    }
  }

  private validateAll(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({onlySelf:true})
      }else if(control instanceof FormGroup){
        this.validateAll(control)
      }
    })

  }

}
