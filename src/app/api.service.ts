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
    return this.http.post("https://localhost:8081/api/User", body);
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

}
