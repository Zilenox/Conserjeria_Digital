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
  selector: 'app-administrador-main',
  templateUrl: './administrador-main.page.html',
  styleUrls: ['./administrador-main.page.scss'],
})
export class AdministradorMainPage implements OnInit {

  public alertButtons = ['Agregar'];
  public Pizarra:any;
  private rut:any;
  private user:any;
  private name:any;

    constructor(
      public api:ApiService,
      public router:Router,
      public alertcontroller:AlertController,
      private route: ActivatedRoute
    ) {}
  
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

  async PromtAgregarEntrada(){
    const alert = await this.alertcontroller.create({
      message: 'AGREGAR NUEVA ENTRADA',
      inputs: [
        {
          name: 'mensaje',
          placeholder: 'Mensaje',
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
          text: 'crear',
          handler: (data:any) => {

              if(data.mensaje != null ){
                  console.log("creando conserje")
                  this.CrearMensaje(data);
              }
              else 
              this.ErrorCreando();
          }
        }
      ]
    });
    await alert.present(); 
  }

  async CrearMensaje(data:any){
    this.api.postPublicacion(data.mensaje).subscribe(result=>{
      console.log(result);
      this.MensajeCreado();
    });
  }
  async PromtAgregarUser(){
    const alert = await this.alertcontroller.create({
      message: 'AGREGAR NUEVO USUARIO',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre',
        },
        {
          name: 'identificador',
          placeholder: 'RUT sin puntos ni guion',
        },
        {
          name: 'tipo',
          placeholder: 'Conserje o Residente'
        },
        {
          name: 'depa',
          placeholder: 'depto (si aplica)'
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
          text: 'crear',
          handler: (data:any) => {

              if(data.name != null && data.identificador != null && data.tipo =="Conserje" ){
                  console.log("creando conserje")
                  this.CrearConserje(data);
              }else if(data.name != null && data.identificador != null && data.tipo =="Residente" && data.depa >0){
                  console.log("creando residente")  
                  this.CrearResidente(data);
              }
              else 
              this.ErrorCreando();
          }
        }
      ]
    });
    await alert.present(); 
  }

  async CrearResidente(data:any){
    let body = {
      "id": 0,
      "rut": data.identificador,
      "nombre": data.name,
      "numeroDepto": data.depa,
      "casilla": 0
    }
    this.api.postNuevoResidente(body).subscribe(result=>{
      console.log(result);
      this.UserCreado();
    });
  }
  async CrearConserje(data:any){
    let body = {
      "id": 0,
      "rut": data.identificador,
      "nombre": data.name
    }
    this.api.postNuevoConserje(body).subscribe(result=>{
      console.log(result);
      this.UserCreado();
    });
  }

  async MensajeCreado(){
    const alert = await this.alertcontroller.create({
      message: 'Mensaje creado'
    });
    await alert.present();
  }
  async UserCreado(){
    const alert = await this.alertcontroller.create({
      message: 'Usuario creado'
    });
    await alert.present();
  }

  async ErrorCreando(){
    const alert = await this.alertcontroller.create({
      message: 'error, reintente'
    });
    await alert.present();
  }

  

  AgregarEntrada(){}

  NavAgregarUsuario(){
    this.router.navigate(['./crear-usuario']);
  }
  
  ngOnInit() {
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
    this.FillPizarra();
  }

  FillPizarra(){
    this.api.getPublicaciones().subscribe(result=>{
      this.Pizarra=result;
      console.log(result);
    });
  }

  salirAlLogin(){
    this.router.navigate(['login-administrador']);
  }

  IrAPerfil(){
    
  }

}
