import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.page.html',
  styleUrls: ['./login-administrador.page.scss'],
})

export class LoginAdministradorPage implements OnInit {

  formularioLoginAdmin: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formularioLoginAdmin = this.fb.group(
      {
        'nombre':new FormControl("",Validators.required),
        'password':new FormControl("",Validators.required)
      }
    )

  }
  ingresarAdministrador(){}
  cambiarResidente(){}
  cambiarConserje(){}
  ngOnInit() {
  }

}
