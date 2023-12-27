import { Component, Input } from '@angular/core'

@Component({
  selector: 'Star',
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
export class Star {
  @Input() active: boolean = false
}
