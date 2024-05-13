import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {

  formularioCambioClave: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.formularioCambioClave = this.fb.group(
      {
        'OldKey':new FormControl("",Validators.required),
        'NewKey':new FormControl("",Validators.required),
        'ReNewKey':new FormControl("",Validators.required)
      }
    )
  }

  ngOnInit() {
  }

}
