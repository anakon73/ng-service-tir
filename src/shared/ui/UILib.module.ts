import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NButton } from './NButton'
import { NInput } from './NInput'
import { NTextarea } from './NTextarea'

@NgModule({
  declarations: [NButton, NInput, NTextarea],
  exports: [NButton, NInput, NTextarea],
  imports: [CommonModule, FormsModule],
})
export class UILib {}
