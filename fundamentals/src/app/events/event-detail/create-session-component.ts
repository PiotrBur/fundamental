import { Component, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators  } from '@angular/forms'
import { EventEmitter } from 'stream'
import { ISession } from '../shared/event.model'

@Component ({
    selector:'create-session',
    templateUrl: './create-session.component.html'
})
    export class CreateSessionComponent implements OnInit {
        @Output () saveNewSession: any = new EventEmitter ()
        newSessionForm!: FormGroup 
        name!: FormControl
        presenster!: FormControl
        duraction!: FormControl
        level!: FormControl
        abstract!: FormControl
        
        
        ngOnInit(): void {
            this.name = new FormControl('', Validators.required)
            this.presenster = new FormControl('', Validators.required)
            this.duraction   = new FormControl('', Validators.required)
            this.level = new FormControl('', Validators.required)
            this.abstract = new FormControl('', [Validators.required,
                Validators.maxLength(400)])

                this.newSessionForm = new FormGroup ({
                    name: this.name,
                    presenter: this.presenster,
                    duraction: this.duraction,
                    level: this.level,
                    abstract: this.abstract

                })
        }
        saveSession(){
          let session:ISession = {
              voters: [],
              id: 0,
              name: '',
              presenter: '',
              duration: 0,
              level: '',
              abstract: ''
          }
          this.saveNewSession.emit(session)
        }
    }