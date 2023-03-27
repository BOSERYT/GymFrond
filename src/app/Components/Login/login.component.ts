import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      User_name: ['', Validators.required],
      Pass: ['', Validators.required]
    })
  }

  checkLocalStorage() {
    return localStorage.getItem('token')
  }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     //Enviar a la BD
  //     console.log(this.loginForm.value);
  //     this.auth.loginAPI2(this.loginForm.value).then(result=>{
        
  //      console.log(result);
  //       // localStorage.setItem("token", JSON.stringify(result))
  //       // this.route.navigateByUrl('roles');
  //     })
        
     
  //   } else {
  //     //Arrojar errores
  //     console.log("No valido");

  //     this.validateAllFormsFileds(this.loginForm);
  //     Swal.fire(
  //       '¡Formulario inválido!',
  //       'Los parámetros que ingresó no han sido completados. Favor de revisar',
  //       'question'
  //     )
  //   }
  // }


  onLogin(){
    if(this.loginForm.valid){
      //Enviar a la BD
      console.log(this.loginForm.value);
      this.auth.loginAPI2(this.loginForm.value)
      .subscribe({
        next: (res) =>{
          
          // alert(res.message);
          console.log(res);
          // this.auth.storeToken(res.token)
          // localStorage.setItem("token", res.token);
          // this.route.navigate(['roles']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "",
            // title: 'Inicio de sesión correcto ¡Bienvenido!',
            showConfirmButton: false,
            timer: 1500,
          })
        },
      })
      Swal.fire({
        icon: 'error',
        title: '¡Credenciales incorrectas!',
        text: 'Usuario ó contraseña incorrecto. Favor de verificar',
      })
    }else{
      //Arrojar errores
      console.log("No valido");

      this.validateAllFormsFileds(this.loginForm);
      alert("Formulario invalido");
    }
  }

  ocultarContrasena() {
    this.isText = !this.isText;
    // Revisar la condición para cambiar la contraseña
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = "text" : this.type = "password"
  }

  private validateAllFormsFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsDirty({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAllFormsFileds(control)
      }
    })

  }

}
