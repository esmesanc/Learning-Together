import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-irregular-verbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.css']
})
export class IrregularVerbsComponent {
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  toppings: FormGroup;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      Answere1: false,
      Answere2: false,
      Answere3: false,
    });

  
}
}

