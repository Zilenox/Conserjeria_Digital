import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})

export class CrearUsuarioPage implements OnInit {

  public RUT:any;
  public type:any;
  public name:any;
  public depto:any;

  constructor(public api:ApiService) {}

  
  CrearConserje(){
    let body = {
      "id": 0,
      "rut": this.RUT,
      "nombre": this.name
    }
    this.api.postNuevoConserje(body).subscribe(result=>{
      console.log(result);
    });
  }

  CrearResidente(){
    let body = {
      "id": 0,
      "rut": this.RUT,
      "nombre": this.name,
      "numeroDepto": this.depto,
      "casilla": 0
    }
    this.api.postNuevoResidente(body).subscribe(result=>{
      console.log(result);
    });
  } 

  CrearUsuario(){
    if(this.type == 'Conserje')
      {
        this.CrearConserje();
      }
    else if(this.type == 'Residente')
      {
        this.CrearResidente();
      }
    else{
      console.log("el tipo ingresado no es valido")
    }
  }

  ngOnInit() {
  }

}
