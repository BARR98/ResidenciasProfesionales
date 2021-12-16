import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maestria } from '../../models/maestria/maestria';

@Injectable({
  providedIn: 'root'
})

export class MaestriasService {

  url = 'http://localhost:3000/api/maestrias'
  maestria: any
  maestrias: Maestria[]
  
  constructor(private http: HttpClient){
    this.maestria = this.maestria,
    this.maestrias = new Array()
   }

  getAllMaestrias() {
    return this.http.get(this.url);
  }

  getMaestria(_id: string) {
    return this.http.get(this.url + '/' + _id);
  }

  createMaestria(maestria: Maestria) {
    return this.http.post(this.url, maestria);
  }


  updateMaestria(_id: string , maestria: Maestria) {
    return this.http.put(this.url + '/' + _id, maestria);
  }

  deleteMaestria(_id: String) {
    return this.http.delete(this.url + '/' + _id);
  }

}
