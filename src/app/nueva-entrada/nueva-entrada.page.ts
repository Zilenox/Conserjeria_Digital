import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
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
  
  public data:any;
  constructor(public api:ApiService) { }

  NuevaEntrada(){
    this.api.postPublicacion(this.data).subscribe(result=>{
      console.log(result);
    });
  }
  ngOnInit() {
  }

}
