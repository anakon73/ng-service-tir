import { Component, EventEmitter, Input, Output } from '@angular/core'

import { ButtonSize, ButtonVariant } from './types'

@Component({
  selector: 'NButton',
  template: `
    <button
      class="flex items-center gap-1 rounded-large font-bold transition-colors duration-300"
      [ngClass]="{
        'px-7 py-4 text-sm': size === 'lg',
        'px-9 py-3 text-xs': size === 'md',
        'bg-blue-600 text-white/100 hover:bg-blue-700 hover:text-zinc-100/100':
          variant === 'primary',
        'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-950':
          variant === 'light',
        'bg-white text-gray-900 hover:bg-zinc-100 hover:text-gray-950':
          variant === 'white',
        'text-white hover:text-zinc-100': variant === 'link-white',
        'text-blue-600 hover:text-blue-800': variant === 'link'
      }"
      (click)="onClick.emit()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class NButton {
  @Input() size: ButtonSize = 'md'
  @Input() variant: ButtonVariant = 'primary'

  @Output() onClick = new EventEmitter<void>()
}
