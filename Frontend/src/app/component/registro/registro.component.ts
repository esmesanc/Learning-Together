import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'
import { UsuariosService } from 'src/services/usuarios.service';
import { UserModel } from 'src/models/userModel';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
   
register;

constructor(
  private router: Router, private _snackBar: MatSnackBar,private formBuilder: FormBuilder,
  private userServices:UsuariosService) { 

this.register = formBuilder.group({
nombre_usuario:['', [ Validators.required]],
email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
password:['', [ Validators.required]],
Confirmar_password:['', [ Validators.required]],

});


  }
tiles: any[] = [
  {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];

ngOnInit(): void {
  //
}

crearUsuario(){
  //Lo hago así para que entiendas mejor y no se vea todo amontonado
  //Vamos a inciar con un simple console para que veas.
  //console.log('Aqui vamos a implementar nuestra primer llamada al backend :>> ');
  //Lo que prosige es crear un objeto e implementar el metodo por ejemplo
  // bueno ya no recuerdo como instanciarlo pero eso nada más y ya...
  const usuario = new UserModel();

  usuario.correo = this.register.value.email;
  usuario.contrasena = this.register.value.password;
  usuario.nombre_usuario = this.register.value.nombre_usuario;

  this.userServices.crearUsuario(usuario)
    .subscribe(
      res => {
        const respuestas = Object.values(res);
        if(respuestas[0]){
          alert(respuestas[1]);
          this.router.navigate(["/Login"]);
        }else{
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
  console.log(this.register.value);
}

}
