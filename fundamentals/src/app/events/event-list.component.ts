import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";
import { IEvent } from "./shared/event.model";
//declare let toastr: { success: (arg0: any) => void; }

@Component({
    selector: 'events-list',
    templateUrl: 'event-list.component.html' 
   
})


export class EventsAppComponent implements OnInit {
    events!: IEvent[]
constructor(private eventService: EventService) {
    
}

ngOnInit() {
   this.eventService.getEvents().subscribe(events => {this.events = events})
}


handleThumbnailClick(eventName: any){
//toastr.success(eventName)
}

}
