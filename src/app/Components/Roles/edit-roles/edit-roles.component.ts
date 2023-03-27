import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Roles } from '../../../Interfaces/Roles';
import { ApiServiceService } from '../../../Services/ApiServiceService';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
  
})


export class EditRolesComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private api: ApiServiceService, private router: Router) { }

  datosRoles!: Roles;

  editarForm = new FormGroup({
    name_role: new FormControl(''),
    id: new FormControl(''),
  })

 



  ngOnInit(): void {
    let roleId = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleRole(roleId).subscribe((data) => {
      this.datosRoles = data
      this.editarForm.setValue({
        'name_role': this.datosRoles.name_role,
        'id': this.datosRoles.id.toString()
      });
      
    })
  }

  postForm(form:Roles | any) {
    let roleId = this.activerouter.snapshot.paramMap.get('id');
    this.api.updateRole(form).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Rol actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['roles']);
    })
  }

  preConfirmToDelete(){
    Swal.fire({
      title: '¿Está seguro de eliminar este registro?',
      text: "No podrá revertir el proceso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteRoles();
        Swal.fire(
          '¡Eliminado con éxito!',
          'El registro ha sido eliminado',
          'success'
          
        )
        this.router.navigate(['roles'])
      }
    })
  }
  //DeleteRoles
  deleteRoles() {
    let roleId = this.activerouter.snapshot.paramMap.get('id');
    let datos: Roles | any = this.editarForm.value
    this.api.deleteRole(datos, roleId).subscribe(data => {
      console.log(data);
    })
  }
}

