import { Component } from "@angular/core";
import { EventService } from "../event.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; } 
        
    `]

})
export class EventDetailsComponents {
    event: any
    constructor(private eventService: EventService, private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.event = this.eventService.getEvent(this.route.snapshot.params['id'])

    }

}