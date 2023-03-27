import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../Interfaces/Usuarios';
import { UsuariosService } from '../../Services/usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private users:UsuariosService){}

  usuario: Usuarios[]=[];

  ngOnInit():void{
    this.users.getAllUsers().subscribe(data=>{
      this.usuario = data
      console.log(data);
    })
  }

}
