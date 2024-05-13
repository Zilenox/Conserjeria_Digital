import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-login-conserje',
  templateUrl: './login-conserje.page.html',
  styleUrls: ['./login-conserje.page.scss'],
})
export class LoginConserjePage implements OnInit {
  formularioLoginConserje: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioLoginConserje = this.fb.group(
      {
        'nombre':new FormControl("",Validators.required),
        'password':new FormControl("",Validators.required)
      }
    )
  }
  ingresarConserje(){}
  cambiarResidente(){}
  cambiarADMIN(){}  //placeholder funcion cambio a login admin
  ngOnInit() {
  }

}
