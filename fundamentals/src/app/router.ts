import { Routes } from "@angular/router"
import { Error404Component } from "./errors/404.component"
import {EventDetailsComponents} from "./events/event-detail/event-details.component"
import { EventsAppComponent } from './events/event-list.component'
import { CreateEventComponent } from './events/create-events.component'
import { EventRouteActivator } from './events/event-detail/event-route-activator.service'
import { EventListResolver }from './events/events-list-resolver.service'
import { CreateSessionComponent } from "./events/event-detail/create-session-component"


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
      canDeactivate: ['canDeactivateCreateEvent']},
    { path:'events', component: EventsAppComponent, resolve: { events:EventListResolver }},
    { path:'events/:id', component: EventDetailsComponents, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateSessionComponent},
    { path:'404', component: Error404Component},
    { path:'', redirectTo: '/events', pathMatch: 'full'},
    { 
      path: 'user', 
      loadChildren: () => import('./nav/user/user.module')
      .then(m => m.UserModule)
    }

]