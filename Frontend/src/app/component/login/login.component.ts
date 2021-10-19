import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UsuariosService } from '../../../services/usuarios.service';
import { UserModel } from '../../../models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

   
log;

// Acá dentro del constructor solo instanciamos la clase UsuarioServices que es la que nos hará la conexión como ya la habiamos denifinido antes
constructor(
  private router: Router, private _snackBar: MatSnackBar,private formBuilder: FormBuilder,
  private userServices:UsuariosService) { 

this.log = formBuilder.group({
Email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
password:['', [ Validators.required]],

});


  }
tiles: any[] = [
  {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];

//Todo este archivo según es tu componente principal, no.?
// Si revisaste un poco sobre el ciclo de vida de un componente en angular, sabrás que tienen un método principal de creación
// Si no, te lo digo acá, en ngOnInit es el primer método que se implementa en un componente
ngOnInit(): void {
//Este.... hasa acá todo claro.???
//Vamos a crear una función acá para poder implementar nuestro petición al servidos
  this.crearUsuario();
// this.errorMessage = this.Logeo();
}

crearUsuario(){
  //Lo hago así para que entiendas mejor y no se vea todo amontonado
  //Vamos a inciar con un simple console para que veas.
  console.log('Aqui vamos a implementar nuestra primer llamada al backend :>> ');
  //Lo que prosige es crear un objeto e implementar el metodo por ejemplo
  // bueno ya no recuerdo como instanciarlo pero eso nada más y ya...
  const usuario = new UserModel();

  usuario.correo = "gatito@gmail.com";
  usuario.contrasena = "123aBc#4";
  usuario.nombre_usuario = "gatito";

  this.userServices.crearUsuario(usuario);

  console.log('gatito :>> ');
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action , {
    verticalPosition: 'bottom',
              duration: 3500
  });
}
openSnackBar2(message: string, action: string) {
  this._snackBar.open(message, action , {
    verticalPosition: 'top',
              duration: 3500
  });
}
saveData(){
  console.log(this.log.value);
}
  

}
