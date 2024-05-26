import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
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


  constructor(public api:ApiService) { 
  }

  AgregarEntrada(){}

  AgregarUsuario(){}
  
  ngOnInit() {
  }

}
