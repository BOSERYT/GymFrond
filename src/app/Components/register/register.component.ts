import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/Interfaces/Usuarios';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm! : FormGroup;

  constructor(private fb: FormBuilder,private api:UsuariosService, private router: Router){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name_user: ['', Validators.required ],
      first_last_name: ['', Validators.required ],
      second_last_name: ['', Validators.required ],
      age: ['', Validators.required ],
      height_user: ['', Validators.required ],
      gender: ['', Validators.required ],
      imc: ['', Validators.required ],
      user_name: ['', Validators.required ],
      pass: ['', Validators.required ],
    })
  }

  onCreateUser(){
    if(this.registerForm.valid){
      //Enviar a la BD
      this.api.createUsers(this.registerForm.value)
      .subscribe({
        next:(res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Rol guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          this.registerForm.reset();
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
      this.validateAll(this.registerForm);
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


