import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'NInput',
  template: `
    <div
      class="flex flex-col justify-start gap-1 font-montserrat font-semibold leading-small text-sm"
    >
      <label
        class="block"
        for="EmailInput"
      >
        {{ label }}
      </label>
      <input
        class="rounded-lg border-slate-300 p-4 focus:ring-0"
        type="text"
        id="EmailInput"
        [ngModel]="model"
        (ngModelChange)="modelChange.emit($event)"
      />
    </div>
  `,
})
export class NInput {
  @Input() label: string
  @Input() model: string

  @Output() modelChange = new EventEmitter<string>()
}
