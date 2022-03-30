import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
    router: any;
    
    constructor(private eventService:EventService){

    }
canActivate(route:ActivatedRouteSnapshot){
   const eventExists= !!this.eventService.getEvent(+route.params['id'])
if (!eventExists) 
this.router.navigate(['/404'])
return eventExists
}


}

