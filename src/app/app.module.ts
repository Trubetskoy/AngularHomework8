import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {UserComponent} from './components/user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDialogModule} from '@angular/material';
import {DialogOverviewExampleDialog} from '../app/components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthenticationGuard} from './guards/authentication-guard';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import { PipesPipe } from './components/pipes/pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent,
    DialogOverviewExampleDialog,
    PipesPipe,
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
    MatCheckboxModule,
    MatSelectModule,
    MatSortModule,
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [AuthenticationGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
