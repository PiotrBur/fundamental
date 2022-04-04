import {Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './event.service'

@Component ({
    templateUrl :'shared/create-event.component.html'
})
export class CreateEventComponent {  
    newEvent: any 
    isDirty:boolean = true
    //eventService: any
constructor(private router: Router, private eventService:EventService){

}
    saveEvent() {
        this.eventService.saveEvent()
        
    }
    cancel(){
        this.router.navigate(['/events'])

    }

}