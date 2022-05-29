import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { EventService } from './event.service'
enum FormFields {
    NAME = 'name',
    DATE = 'date',
    TIME = 'time',
    PRICE = 'price'
}
@Component({
    templateUrl: 'shared/create-event.component.html'
})
export class CreateEventComponent {
    @ViewChild('newEventForm') newEventForm: any;
    FormFields: typeof FormFields = FormFields;
    newEvent: any
    isDirty: boolean = true
    //eventService: any
    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log(this.newEventForm)

    }
    saveEvent() {
        this.eventService.saveEvent()

    }
    cancel() {
        this.router.navigate(['/events'])

    }

}