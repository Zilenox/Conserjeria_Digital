import { Component, OnInit } from '@angular/core';
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

  formularioNuevoUsuario: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioNuevoUsuario = this.fb.group(
      {
        'name':new FormControl("",Validators.required),
        'type':new FormControl("",Validators.required),
        'depto':new FormControl("")
      }
    )
   }
  CrearUsuario(){}
  ngOnInit() {
  }

}
