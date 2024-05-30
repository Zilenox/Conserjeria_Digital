import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { Router } from '@angular/router'; 
import { HttpStatusCode } from '@angular/common/http';
import { Platform, AlertController } from '@ionic/angular';
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

  constructor(
    public api:ApiService,
    public router:Router,
    public alertcontroller:AlertController
  ) {}


  ingresarAdministrador(){
    let body = {
      "rut": this.rut,
      "pass": this.pass
    }
   if(this.rut.length<9)
    this.ErrorDeLogin();
  else{
      this.api.LoginAdmin(body).subscribe(/*(res) => */{
        next: (data: any) => {
          if(data.status == HttpStatusCode.Ok) {
            this.router.navigate(['./administrador-main'],{ queryParams: { id:this.rut }});
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
      }

      ]
        
    });
    await alert.present();
    //this.Refrescar();
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
