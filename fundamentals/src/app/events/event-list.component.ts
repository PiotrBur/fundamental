import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";
import { IEvent } from "./shared/event.model";
declare let toastr: { success: (arg0: any) => void; }

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
        <div *ngFor= "let event of events" class="col-md-5">
<event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
</div>
</div>
</div>
    ` 
})



export class EventsAppComponent implements OnInit {
    events!: IEvent[]
constructor(private eventService: EventService) {
    
}

ngOnInit() {
   this.eventService.getEvents().subscribe(events => {this.events = events})
}


handleThumbnailClick(eventName: any){
toastr.success(eventName)
}

}
