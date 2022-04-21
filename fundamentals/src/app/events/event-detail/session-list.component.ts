import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/event.model'

@Component ({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() 
    session: ISession[] = [];
    @Input()
    filterBy!: string;  
    visibleSession: ISession [] = [];
    @Input()
    sortBy!: string;

    ngOnChanges() {
        if (this.session) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc);
        }
    }
    filterSessions(filter?: string ) {
        if(filter === 'all') {
            this.visibleSession = this.session?.slice(0);
        }}
        //else {
          //  this.visibleSession = this.filterSessions.filter(session =>{
                //return session.level.toLocaleLowerCase() === filter;
          //  })
        }
  //  }
//} 
    function sortByNameAsc(s1: ISession, s2: ISession){
        if(s1.name > s2.name) return 1
        else if(s1.name === s2.name) return 0
        else return -1
    }
    function sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length
    }