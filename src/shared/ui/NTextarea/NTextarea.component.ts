import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AreaSize } from './types'

@Component({
  selector: 'NTextarea',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <textarea
      class="w-full resize-none overflow-hidden border border-slate-300 bg-white p-4 text-sm font-medium leading-small text-slate-700 placeholder:font-normal placeholder:text-gray-900/50"
      [ngClass]="{
        'rounded-lg h-36 max-w-[370px]': size === 'sm',
        'rounded-md h-32': size === 'lg'
      }"
      [ngModel]="field"
      (ngModelChange)="fieldUpdate.emit($event)"
      [placeholder]="placeholder"
    ></textarea>
  `,
})
export class NTextarea {
  @Input({ required: true }) size: AreaSize
  @Input() field: string
  @Input() placeholder: string

  @Output() fieldUpdate = new EventEmitter<string>()
}
