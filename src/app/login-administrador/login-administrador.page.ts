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
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.page.html',
  styleUrls: ['./login-administrador.page.scss'],
})

export class LoginAdministradorPage implements OnInit {

  public rut:any;
  public pass:any;

  constructor(public api:ApiService,public router:Router) {   }


  ingresarAdministrador(){
    let body = {
      "rut": this.rut,
      "pass": this.pass
    }
    
    this.api.LoginAdmin(body).subscribe((res) => {

       if (res.status == HttpStatusCode.Ok) {
          this.router.navigate(['./administrador-main']);
        } else {
          console.log(res);
        }
  });
}
  
  ToLoginConserje(){
    this.router.navigate(['login-conserje']);
  }
  ToLoginResidente(){
    this.router.navigate(['login-residente']);
  }
  ngOnInit() {
  }

}
