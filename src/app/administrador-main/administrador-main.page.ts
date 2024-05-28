import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { Router } from '@angular/router'; 

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
@Component({
  selector: 'app-administrador-main',
  templateUrl: './administrador-main.page.html',
  styleUrls: ['./administrador-main.page.scss'],
})
export class AdministradorMainPage implements OnInit {

 public Pizarra:any;
  constructor(public api:ApiService,public router:Router) { 
  }

  AgregarEntrada(){}

  NavAgregarUsuario(){
    this.router.navigate(['./crear-usuario']);
  }
  
  ngOnInit() {
    this.FillPizarra();
  }

  FillPizarra(){
    this.api.getPublicaciones().subscribe(result=>{
      this.Pizarra=result;
      console.log(result);
    });
  }

  salirAlLogin(){
    this.router.navigate(['./login-administrador']);
  }

  IrAPerfil(){
    
  }

}
