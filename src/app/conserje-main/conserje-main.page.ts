import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { ActivatedRoute, Router } from '@angular/router'; 
import { Platform, AlertController } from '@ionic/angular';
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
  public Correspondencias:any;
  public NumDepa:any;
  public Tipo:any;
  public user:any;
  public rut:any;
  public name:any;
  


  constructor(
    public api:ApiService,
    public router:Router,
    private alertcontroller:AlertController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.FillCorrespondencia();
    this.route.queryParams.subscribe( (params:any) => {
      this.rut = params.id;    
    });
    if(this.rut != null){
      this.api.GetUserEspecifico(this.rut).subscribe(result=>{
        this.user = result;
        this.name = this.user.nombre
        console.log(this.user)
        console.log(this.user.nombre)
      })
    }
  }

  FillCorrespondencia(){
    this.api.getCorrespondencia().subscribe(result=>{
      this.Correspondencias=result;
      console.log(result);
    });
  }

  Refrescar(){
    this.router.navigate(['./conserje-main']);
  }

  AgregarEncomienda(){
    let body = {
      "id": 0,
      "tipo": this.Tipo,
      "destinatario": this.NumDepa
    }
    this.api.postNuevaEncomienda(body).subscribe(result=>{
      console.log(result);
      this.encomiendaGuardada();
    });
  } 

  async encomiendaEliminada(){
    const alert = await this.alertcontroller.create({
      message: 'encomienda eliminada'
    });
    await alert.present();
    //this.Refrescar();
  }

  async encomiendaGuardada(){
    const alert = await this.alertcontroller.create({
      message: 'encomienda guardada'
    });
    await alert.present();
  }

  EliminarEncomienda(id:any){
    this.api.EliminarEncomienda(id).subscribe(result=>{
      console.log(result);
    });
    this.encomiendaEliminada();
  }

  salirAlLogin(){
    this.router.navigate(['login-conserje']);
  }

 
  async PromptPerfil(){
    const msj = this.name
    const alert = await this.alertcontroller.create({
      header: this.name,
      message: this.rut,
      inputs: [
        {
          name: 'ClaveActual',
          placeholder: 'Clave actual',
          type:'password'
        },
        {
          name: 'NuevaClave',
          placeholder: 'Nueva clave',
          type:'password'
        },
        {
          name: 'NuevaClaveBis',
          placeholder: 'Repita nueva clave',
          type:'password'
        }

      ],
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Cambiar',
          handler: (data:any) => {
              if(data.NuevaClave != null  && data.ClaveActual != null){

                if(data.NuevaClave == data.NuevaClaveBis){
                  console.log("cambiando clave")
                  this.CambiarClave(this.rut, data.NuevaClave);
                }
                else
                  console.log('Cancel clicked');
              }
              else 
              this.ErrorCreando();
          }
        }
      ]
    });
    await alert.present();
  }

  async CambiarClave(Identificacion:any, newpass:any){
    let body = {
      "rut": Identificacion,
      "pass": newpass
    }
    this.api.PutPassword(body,Identificacion).subscribe(result=>{
      console.log(result);
      this.ClaveCambiada();
    });
  }
  async ClaveCambiada(){
    const alert = await this.alertcontroller.create({
      message: 'Clave cambiada'
    });
    await alert.present();
  }
  async ErrorCreando(){
    const alert = await this.alertcontroller.create({
      message: 'error, reintente'
    });
    await alert.present();
  }
}
