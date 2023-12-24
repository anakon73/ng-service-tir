import { Component, EventEmitter, Input, Output } from '@angular/core'

import { AreaSize } from './types'

@Component({
  selector: 'NTextarea',
  template: `
    <textarea
      [ngClass]="{
        'p-4 border bg-white text-sm border-slate-300 leading-small resize-none overflow-hidden': true,
        'placeholder:text-gray-900/50 placeholder:font-normal font-medium text-slate-700 w-full mt-20': true,
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
