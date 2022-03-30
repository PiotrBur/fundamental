import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  readonly profileForm: FormGroup; // readonly sluzy do tego zebys sobie przypadkiem nie nadpisał tego pola, jak cos ustawiasz tylko w
  // konstruktorze to warto to dodać
  router: any

  constructor(private readonly authService: AuthService) { // serwisy zawsze z readolny bo tego raczej nigdy wiecej nie nadpiszesz a tak
    // przypadkiem tego nie zrobisz bo blad dostaniesz
    this.profileForm = new FormGroup({
      // todo firstName i lastName wrzucić do enuma i go używaj tu i w html bo jak bedziesz chcial pozniej zmienic nazwe to bedziesz
      //  musial w kazdym miejscu oddzielnie
      ['firstName']: new FormControl(this.authService.currentUser?.firstName),
      ['lastName']: new FormControl(this.authService.currentUser?.lastName)
    })
    // jak przypiszesz nowy FormGroup w konstruktorze a nie w ngOnInit to nie będzie krzyczał że może być undefined bo konstruktor
    // uruchamia się szybciej niz ngOnInit i przed wyrenderowaniem htmla, poczytaj sobie o cyklu życia komponentu
  }

// nie musisz tu przekazywac parametru bo masz i tak dostep do niego w tym miejscu, ale to nie jest jakis blad a raczej wybor jak chcesz
// to zapisac
  saveProfile(): void {
    // todo warto ten typ to oddzielnego interface dac
    const formValues: { firstName: string, lastName: string } = this.profileForm.getRawValue() as { firstName: string, lastName: string }; // warto korzystac z tego bo wtedy
    // dostaniesz tez wartosci z disabled inputow a
    // czasem sa inputy tylko do odczytu co dane z innego miejsca biora
    // to as { firstName: string, lastName: string } mowi ze ma to traktowac jako taki typ, akurat getRawValue zwraca any bo nigdy nie
    // wiadomo jakie bedziesz mial nazwy kontrolek, bledu co prawda nie ma ale u mnie się czepia w pracy o typ wtedy
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
