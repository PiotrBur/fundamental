import { Component } from "@angular/core";
import { EventService } from "../event.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding: 0 20px; } 
        
    `]

})
export class EventDetailsComponents {
    event: any
    addMode!: boolean;
    filterBy: string = 'all';
    sortBy!: string; 


    constructor(private eventService: EventService, private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.event = this.eventService.getEvent(this.route.snapshot.params['id'])

    }
    addSession() {
        this.addMode =true
    }

}