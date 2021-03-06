import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
}
)

export class RegistrationComponent {
    submited: boolean;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private apiService: ApiService
    ) {
        this.submited = false;
    }

    registrationForm = this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    registration(event) {
        this.submited = true;
        event.preventDefault();
        if (this.registrationForm.valid) {
            this.apiService.registration(this.registrationForm.value).then(res => {
                this.router.navigate(['user']);
            });
        }
    }
}
