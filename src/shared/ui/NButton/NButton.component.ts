import { Component, EventEmitter, Input, Output } from '@angular/core'

import { ButtonSize, ButtonVariant } from './types'

@Component({
  selector: 'NButton',
  template: `
    <button
      [ngClass]="{
        'font-montserrat font-bold rounded-[30px] ': true,
        'transition-colors duration-300': true,
        'px-7 py-4 text-sm': size === 'lg',
        'px-9 py-3 text-xs': size === 'md',
        'bg-blue-600 text-white  hover:bg-blue-700 hover:text-zinc-100':
          variant === 'primary',
        'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-950':
          variant === 'light'
      }"
      (click)="onClick.emit()"
    >
      {{ label }}
    </button>
  `,
})
export class NButton {
  @Input({ required: true }) label: string
  @Input() size: ButtonSize = 'md'
  @Input() variant: ButtonVariant = 'primary'

  @Output() onClick = new EventEmitter<void>()
}
