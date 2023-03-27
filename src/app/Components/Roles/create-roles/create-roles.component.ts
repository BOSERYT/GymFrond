import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/ApiServiceService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.css']
})
export class CreateRolesComponent {

  roleForm! : FormGroup;

  constructor(private fb: FormBuilder,private api:ApiServiceService, private router: Router){}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      name_role: ['', Validators.required ]
    })
  }

  onCreateRole(){
    if(this.roleForm.valid){
      //Enviar a la BD
      this.api.createRole(this.roleForm.value)
      .subscribe({
        next:(res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Rol guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.roleForm.reset();
          this.router.navigate(['roles']);
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
      this.validateAll(this.roleForm);
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
  //   deleteRole(){
  //   Let role_id = this.activerouter.snapshot.paramMap.get('id');

  // }



}
