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
// this.errorMessage = this.Logeo();
}


iniciarSesion(){
  const usuario = new UserModel();

  usuario.correo = this.log.value.Email;
  usuario.contrasena = this.log.value.password;

  this.userServices.login(usuario)
    .subscribe(
      res => {
        const respuestas = Object.values(res);
        if(respuestas[0]){
          this.router.navigate(["/Principal"]);
        }else{
          console.log('respuestas[1] :>> ', respuestas[1]);
          alert(respuestas[1]);
        }
      },
      err => console.error(err)
    );
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
