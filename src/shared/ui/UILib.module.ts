import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NButton } from './NButton'
import { NInput } from './NInput'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [NButton, NInput],
  exports: [NButton, NInput],
  imports: [CommonModule, FormsModule],
})
export class UILib {}
