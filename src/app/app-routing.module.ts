import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RolesComponent } from './Components/Roles/roles/roles.component';
import { CreateRolesComponent } from './Components/Roles/create-roles/create-roles.component';
import { EditRolesComponent } from './Components/Roles/edit-roles/edit-roles.component';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UsersComponent } from './Components/users/users.component';
// import { ExerciseComponent } from './Components/exercise/exercise.component';



const ROUTES:Routes =[
  // {path: '', component:HomeComponent},
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  // {path: 'exercise', component:ExerciseComponent},
  {path: 'roles', component:RolesComponent},
  {path: 'newRole', component:CreateRolesComponent},
  {path: 'editRole/:id', component:EditRolesComponent},

  {path: 'users', component:UsersComponent},
   {path: '**', component:NotFoundComponent},

]


@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
