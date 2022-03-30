import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
   profileForm:FormGroup | undefined
  router: any

  constructor (private authService:AuthService)   {
    
  }
  
  ngOnInit() {
    let firstName = new FormControl
    (this.authService.currentUser?.firstName)
    let lastName = new FormControl
    (this.authService.currentUser?.lastName)
    
    this.profileForm = new FormGroup ({
      firstName: firstName,
      lastName: lastName  
    })
  }
saveProfile(formValues: string) {
  this.authService.updateCurrentUser (formValues)

}

  cancel() {
    this.router.navigate(['events'])
  }
}
