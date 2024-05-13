import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-login-residente',
  templateUrl: './login-residente.page.html',
  styleUrls: ['./login-residente.page.scss'],
})
export class LoginResidentePage implements OnInit {

  formularioLoginResident: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.formularioLoginResident = this.fb.group(
      {
        'nombre':new FormControl("",Validators.required),
        'password':new FormControl("",Validators.required)
      }
    )
  }

  ingresar(){}  //placeholder funcion ingresar
  cambiarConserje(){}
  cambiarADMIN(){}  //placeholder funcion cambio a login admin
  ngOnInit() {
  }

}
