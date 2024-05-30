import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { Router } from '@angular/router';  
import { Platform, AlertController } from '@ionic/angular';
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
  constructor(
    public api:ApiService,
    public router:Router,
    public alertcontroller:AlertController
  ) { }
  

  ingresar(){
      let body = {
        "rut": this.rut,
        "pass": this.pass
      }
      
    if(this.rut.length<9)
      this.ErrorDeLogin();
    else{
        this.api.LoginResidente(body).subscribe(/*(res) => */{
          next: (data: any) => {
            if(data.status == HttpStatusCode.Ok) {
              this.router.navigate(['./casilla-residente'],{ queryParams: { id:this.rut }});
            } 
          },
          error: (response : any) => {
            console.log(response.error);
            this.ErrorDeLogin();
          }
      });
    }
  }

  async ErrorDeLogin(){
    const alert = await this.alertcontroller.create({
      header: 'Contraseña erronea',
      message: 'intente nuevamente',
      buttons: [{
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        }]
      });
      await alert.present();
      //this.Refrescar();
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
