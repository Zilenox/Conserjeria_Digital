import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
@Component({
  selector: 'app-conserje-main',
  templateUrl: './conserje-main.page.html',
  styleUrls: ['./conserje-main.page.scss'],
})
export class ConserjeMainPage implements OnInit {

  formularioNuevoPaquete: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.formularioNuevoPaquete = this.fb.group(
      {
        'NumDepa':new FormControl("",Validators.required),
        'Tipo':new FormControl("",Validators.required)
      }
    )
  }
  AgregarEncomienda(){}
  ngOnInit() {
  }

}
