import { Header } from '@/widgets/Header'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {}
