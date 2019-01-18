import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component ({

    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
}
)

export class LoginComponent{
    profileForm = this.fb.group({
        Login: ['Login'],
        Password: ['password'],
    })
    registration(){
        console.log (this.profileForm)
    }

    constructor(private fb: FormBuilder){

    }

}

