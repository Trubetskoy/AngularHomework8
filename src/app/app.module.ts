import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {UserComponent} from './components/user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDialogModule} from '@angular/material';
import {DialogOverviewExampleDialog} from '../app/components/modal/modal.component'
import { HttpClientModule } from '@angular/common/http';
import {AuthenticationGuard} from './guards/authentication-guard'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent,
    DialogOverviewExampleDialog,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [AuthenticationGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
