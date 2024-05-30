import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { AlertController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-casilla-residente',
  templateUrl: './casilla-residente.page.html',
  styleUrls: ['./casilla-residente.page.scss'],
})
export class CasillaResidentePage implements OnInit {
  id: number;
  editMode = false;
  public Pizarra:any;
  rut:any;
  Residente:any;
  name:any;
 

  constructor(
    public api:ApiService,
    private route: ActivatedRoute, 
    public router: Router,
    public alertcontroller:AlertController,
  ) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe( (params:any) => {
      this.rut = params.id;    
    });
    if(this.rut != null){
      this.api.GetResidenteEspecifico(this.rut).subscribe(result=>{
        this.Residente = result;
        this.name = this.Residente.nombre
        console.log(this.Residente)
        console.log(this.Residente.numeroDepto)
      })
    }
    this.FillPizarra();
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

  FillPizarra(){
    this.api.getPublicaciones().subscribe(result=>{
      this.Pizarra=result;
      //console.log(result);
    });
  }
  salirAlLogin(){
    this.router.navigate(['login-residente']);
  }

  IrAPerfil(){

  }


}
