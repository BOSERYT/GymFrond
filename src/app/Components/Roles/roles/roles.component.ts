import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/Interfaces/Roles';
import { ApiServiceService } from 'src/app/Services/ApiServiceService';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private auth:AuthService,private api: ApiServiceService, private fb: FormBuilder,private router: Router) 
  {
  }

  rolesForm!: FormGroup;


  roles: Roles[] = [];

  ngOnInit(): void {

  //GetAllRoles


    this.api.getAllRoles().subscribe(data => {
      this.roles = data
      console.log(data);
    })


  

  }
  
    //EditRoles to navigate to the component
    editRole(id:number){
    
      this.router.navigate(['editRole',id])
    }


    logout(){
      this.auth.signOut();
    }

}
