import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events/event-list.component';
import { EventThumbnailComponents } from './events/event-thumbnail.components';
import { EventService } from './events/event.service';
import { EventDetailsComponents } from './events/event-detail/event-details.component';
import { CreateEventComponent } from './events/create-events.component'
import { EventRouteActivator } from './events/event-detail/event-route-activator.service'
import { AppComponent } from './app.component';
import { EventListResolver }from './events/events-list-resolver.service'
import { NavBarComponent } from './nav/navbar.components';
import { appRoutes } from './router';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { UserModule } from './nav/user/user.module';
import { AuthService } from './nav/user/auth.service';
//import { EventModel } from './events/shared/event.model'



@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventThumbnailComponents,
    NavBarComponent,
    EventDetailsComponents,
    CreateEventComponent,
    Error404Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator, EventListResolver, AuthService,
  { provide: 'canDeactiveCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not save this event')
  return true
}
