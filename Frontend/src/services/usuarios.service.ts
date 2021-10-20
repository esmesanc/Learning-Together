import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // Este modulo sirve para realizar las consultas http, o sea nos va ayudar a poder ingresar uris como http://blablabla

import { UserModel } from '../models/userModel'; //Este es nuestro objeto que habíamos creado antes, es para facilitar el manejo de objetos dentro de la app


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'http://localhost:3000/api/auth'; // Si te das cuenta esta es la uri que esta definida en tu backend mira...

  constructor( private http:HttpClient ) { } // Acá siplemente instanciamos un objeto HttpClient el que nos va ayudar con las consultas, va?

  //Ahora crearemos un método para identificar que es lo que queremos hacer
  // Por ejemplo, para dar de alta un usuario
  // Vamos a recibir un objeto de tipo UserModel, el de nuestro frontend
  crearUsuario( usuario: UserModel ){
    //Y vamos a retorar simplente el objeto por defaul del backend
    return this.http.post(`${this.url}/register`,usuario);
    
    //En esa linea le indicamos que mediando htpp, por medio de un método post
    // a la url que en este caso sería "http://localhost:3000/api/auth/register" nos dará de alta un usuario
    // que es lo que tu especificaste en tu backend mira...
    //Hasta este punto, en teoria ya estamos consumiendo el back, ahora falta implementarlo obvio en tu componente vista.. vamos para haya ahora...
  }

}




  