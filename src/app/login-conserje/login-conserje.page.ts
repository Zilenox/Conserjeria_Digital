import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { Router } from '@angular/router'; 
import { HttpStatusCode } from '@angular/common/http';
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

  public rut:any;
  public pass:any;

  constructor(public api:ApiService,public router:Router) {}

  ingresarConserje(){
    let body = {
      "rut": this.rut,
      "pass": this.pass
    }
    
    this.api.LoginConserje(body).subscribe((res) => {

       if (res.status == HttpStatusCode.Ok) {
          this.router.navigate(['./conserje-main']);
        } else {
          console.log(res);
        }
  });
}

  cambiarResidente(){}
  cambiarADMIN(){}  //placeholder funcion cambio a login admin
  ngOnInit() {
  }

}
