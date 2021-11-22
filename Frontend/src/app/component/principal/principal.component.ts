import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  temas:any[]=[
    {id:"1",nombre:"Pasado Simple"},
    {id:"2",nombre:"Pasado Continuo"},
    {id:"3",nombre:"Pasado Perfecto Simple"},
    {id:"4",nombre:"Pasado Perfecto Continuo"},
    {id:"5",nombre:"Condicional perfecto"},
    {id:"6",nombre:"Condicional Perfecto"}
  ];

  // modalRef: MdbModalRef<Component> | undefined; , modalService:MdbModalService

  constructor( private router: Router ) { }

  ngOnInit(): void {
    //
  }

  selectTopic(index:number){
    //
  }

  openModal() {
    //this.modalRef = this.modalService.open(ModalComponent)
  }

}

