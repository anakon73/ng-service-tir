import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroStarSolid } from '@ng-icons/heroicons/solid'

@Component({
  selector: 'Star',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  viewProviders: [provideIcons({ heroStarSolid })],
  styles: `
  ng-icon {
    --ng-icon__size: 10px !important;
  }
  `,
  template: `<ng-icon
    class=" !w-4 p-1 !h-4"
    [ngClass]="{
      'text-blue-600': active,
      'text-blue-600/60': !active
    }"
    name="heroStarSolid"
  ></ng-icon>`,
})
export class NStar {
  @Input() active: boolean = false
}
