import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medical } from 'src/app/Interfaces/Medical';
import { MedicalService } from 'src/app/Services/medical.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent {

  medicalForm! : FormGroup;

  constructor(private fb: FormBuilder,private api:MedicalService,private router: Router){}

  ngOnInit(): void {
    this.medicalForm = this.fb.group({
      name_category: ['', Validators.required ],
      available: ['', Validators.required ],
    })
  }

  OncreateMedicalAssessment(){
    if(this.medicalForm.valid){
      //Enviar a la BD
      this.api.createMedicalAssessment(this.medicalForm.value)
      .subscribe({
        next:(res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuairo guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.medicalForm.reset();
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
      this.validateAll(this.medicalForm);
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



