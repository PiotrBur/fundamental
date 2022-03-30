import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: any
    password: any
    mouseoverLogin: any
    form: FormGroup;
    constructor(private authService: AuthService, private router: Router, private readonly fb: FormBuilder) {
        this.form = this.fb.group({ ['userName']: [''], })
    }

    login(formValues: any) {
        console.log(this.form.controls)
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }
    cancel() {
        this.router.navigate(['events'])
    }

    test(asd: any) {
        console.log(asd)
    }
}