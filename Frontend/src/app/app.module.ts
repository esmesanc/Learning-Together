import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegularVerbsComponent } from './pages/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from './pages/irregular-verbs/irregular-verbs.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PrincipalComponent } from './component/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegularVerbsComponent,
    IrregularVerbsComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
