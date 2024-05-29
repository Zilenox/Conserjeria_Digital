import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { Router } from '@angular/router';  
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login-residente',
  templateUrl: './login-residente.page.html',
  styleUrls: ['./login-residente.page.scss'],
})
export class LoginResidentePage implements OnInit {

  public rut:any;
  public pass:any;

  //public api:ApiService
  constructor(public api:ApiService,public router:Router) { }
  

  ingresar(){
      let body = {
        "rut": this.rut,
        "pass": this.pass
      }
      
      this.api.LoginResidente(body).subscribe((res) => {

         if (res.status == HttpStatusCode.Ok) {
            this.router.navigate(['./casilla-residente'],{ queryParams: { id:this.rut }});
          } else {
            console.log(res);
          }
    });
  }

  ToLoginConserje(){
    this.router.navigate(['login-conserje']);
  }
  ToLoginAdmin(){
    this.router.navigate(['login-administrador']);
  }

  ngOnInit() {
  }

}
