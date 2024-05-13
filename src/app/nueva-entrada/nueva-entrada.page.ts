import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.page.html',
  styleUrls: ['./nueva-entrada.page.scss'],
})

export class NuevaEntradaPage implements OnInit {
  formularioNuevaEntrada: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.formularioNuevaEntrada = this.fb.group(
      {
        'NewEntry':new FormControl("",Validators.required)
      }
    )
  }
  NuevaEntrada(){}
  ngOnInit() {
  }

}
