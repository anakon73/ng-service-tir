import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'NInput',
  standalone: true,
  imports: [FormsModule],
  template: ` <div
    class="flex flex-col justify-start gap-1 text-sm font-semibold leading-small"
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
  </div>`,
})
export class NInput {
  @Input() label: string
  @Input() model: string

  @Output() modelChange = new EventEmitter<string>()
}
