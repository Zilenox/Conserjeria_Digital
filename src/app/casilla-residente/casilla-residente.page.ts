import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { InfiniteScrollCustomEvent } from '@ionic/angular';
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

  public Pizarra:any;
  constructor(public api:ApiService) { }

  ngOnInit() {
    this.FillPizarra();
  }

  FillPizarra(){
    this.api.getPublicaciones().subscribe(result=>{
      this.Pizarra=result;
      console.log(result);
    });
  }



}
