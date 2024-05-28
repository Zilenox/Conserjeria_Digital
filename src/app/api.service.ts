import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getPublicaciones(){
    return this.http.get('https://localhost:8081/api/Publicacion')
  }

  postPublicacion(data:any){
    const header =new HttpHeaders({
      contentType:'application/json'
    })

    let body = {
      "id": 0,
      "note": data
    }
    return this.http.post("https://localhost:8081/api/Publicacion", body);
  }

  postNuevoConserje(body:any){
    const header =new HttpHeaders({
      contentType:'application/json'
    })
    return this.http.post("https://localhost:8081/api/Conserje", body);
  }

  postNuevoResidente(body:any){
    const header =new HttpHeaders({
      contentType:'application/json'
    })
    return this.http.post("https://localhost:8081/api/Residente", body);
  }

  getCorrespondencia(){
    return this.http.get('https://localhost:8081/api/Correspondencia')
  }
  postNuevaEncomienda(body:any){
    const header =new HttpHeaders({
      contentType:'application/json'
    })
    return this.http.post("https://localhost:8081/api/Correspondencia", body);
  }
  EliminarEncomienda(id:any){
    return this.http.delete("https://localhost:8081/api/Correspondencia/"+id);
  }
  LoginResidente(body:any){
    return this.http.post("https://localhost:8081/api/Trash", body,{ observe: 'response', responseType: 'text' });
  }
  LoginConserje(body:any){
    return this.http.post("https://localhost:8081/api/Trash", body,{ observe: 'response', responseType: 'text' });
  }
  LoginAdmin(body:any){
    return this.http.post("https://localhost:8081/api/Trash", body,{ observe: 'response', responseType: 'text' });
  }
  GetResidentes(){
    return this.http.get('https://localhost:8081/api/Residente')
  }
  GetResidenteEspecifico(RUT:any){
    return this.http.get('https://localhost:8081/api/Residente/'+RUT)
  }
}
