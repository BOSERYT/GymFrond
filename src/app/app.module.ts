import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RolesComponent } from './Components/Roles/roles/roles.component';
import { CreateRolesComponent } from './Components/Roles/create-roles/create-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRolesComponent } from './Components/Roles/edit-roles/edit-roles.component';
import { LoginComponent } from './Components/Login/login.component';
import { AuthGuard } from './auth.guard';
// import { TokenInterceptor } from './token.interceptor';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { UsersComponent } from './Components/users/users.component';
import { RegisterComponent } from './Components/register/register.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { MedicalComponent } from './components/medical/medical.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolesComponent,
    CreateRolesComponent,
    EditRolesComponent,
    LoginComponent,
    NotFoundComponent,
    UsersComponent,
    RegisterComponent,
    ExerciseComponent,
    MedicalComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  // providers: [{
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptor,
  //   multi:true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
