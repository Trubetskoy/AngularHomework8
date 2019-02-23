import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component ({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
}
)

export class LoginComponent {

    constructor(private fb: FormBuilder,
        private router: Router,
         private ApiService: ApiService
    ) {}

    profileForm = this.fb.group({
        name: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3)]],
    });
    login() {
        event.preventDefault();
        if (this.profileForm.valid) {
            this.ApiService.login(this.profileForm.value).then(res => {
                this.router.navigate(['user']);
            }).catch(e => {
                if (e.status === 'INVALID') {
                    alert('incorrect user data');
                }
            });
         }
    }
}
