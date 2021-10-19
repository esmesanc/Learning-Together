import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

   
log;

constructor(
  private router: Router, private _snackBar: MatSnackBar,private formBuilder: FormBuilder) { 

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

ngOnInit(): void {
// this.errorMessage = this.Logeo();
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
