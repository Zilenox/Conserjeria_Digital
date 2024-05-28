import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { Router } from '@angular/router'; 
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
  constructor(public api:ApiService,public router:Router) { }

  ngOnInit() {
    this.FillCorrespondencia();
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
    });
  } 

  EliminarEncomienda(id:any){
    this.api.EliminarEncomienda(id).subscribe(result=>{
      console.log(result);
    });
  }

  salirAlLogin(){
    this.router.navigate(['./login-conserje']);
  }

  IrAPerfil(){

  }
}
