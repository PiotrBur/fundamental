import { Component, Input, Output,  }  from '@angular/core'
import { EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
    <a [routerLink]="['/events', event.id]" class="well hoverwell thumbnail"></a>
     <h2>{{event.name | uppercase}}</h2>
     <div>Date: {{event.date | date:'short'}}</div>
     <div>Time: {{event.time}}</div>
     <div>Price: {{event.price | currency:'USD'}}</div>
<div>
     <span>Location: {{event.location}}</span>
     <span>&nbsp;</span>
     <span>{{event.location?.address}}, {{event.location?.city}}</span>
</div>
</div>
` ,

styles: [`
.thumbnail { min-height: 210px;}
.pad-left {margin-left: 10px;}
.well div { color: #bbb;}
`]
})
export class EventThumbnailComponents {
   @Input()
     event!: IEvent;
   

}