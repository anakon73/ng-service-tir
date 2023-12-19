import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NButton } from './NButton'

@NgModule({
  declarations: [NButton],
  exports: [NButton],
  imports: [CommonModule],
})
export class UILib {}
