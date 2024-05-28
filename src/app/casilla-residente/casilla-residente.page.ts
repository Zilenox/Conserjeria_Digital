import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { InfiniteScrollCustomEvent } from '@ionic/angular';
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

  constructor(public api:ApiService,private route: ActivatedRoute, public router: Router) {
    
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe( (params:any) => {
      this.rut = params.id;    
    });
    if(this.rut != null){
      this.api.GetResidenteEspecifico(this.rut).subscribe(result=>{
        this.Residente = result;
        console.log(this.Residente)
        console.log(this.Residente.numeroDepto)
      })
    }
    this.FillPizarra();
  }

  FillPizarra(){
    this.api.getPublicaciones().subscribe(result=>{
      this.Pizarra=result;
      //console.log(result);
    });
  }
  salirAlLogin(){
    this.router.navigate(['./login-Residente']);
  }

  IrAPerfil(){

  }


}
