import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  temas:any[]=[
    {nombre:"Pasado Simple"},
    {nombre:"Pasado Continuo"},
    {nombre:"Pasado Perfecto Simple"},
    {nombre:"Pasado Perfecto Continuo"},
    {nombre:"Condicional perfecto"},
    {nombre:"Condicional Perfecto"}
  ];
  
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}

