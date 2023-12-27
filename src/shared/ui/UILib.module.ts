import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgIconsModule } from '@ng-icons/core'
import { heroStarSolid } from '@ng-icons/heroicons/solid'

import { NButton } from './NButton'
import { NInput } from './NInput'
import { NTextarea } from './NTextarea'
import { NStar } from './NStar'

@NgModule({
  declarations: [NButton, NInput, NTextarea, NStar],
  exports: [NButton, NInput, NTextarea, NStar],
  imports: [
    CommonModule,
    FormsModule,
    NgIconsModule.withIcons({ heroStarSolid }),
  ],
})
export class UILib {}
