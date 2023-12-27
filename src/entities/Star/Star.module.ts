import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { heroStarSolid } from '@ng-icons/heroicons/solid'

import { Star } from './Star.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [Star],
  imports: [NgIconsModule.withIcons({ heroStarSolid }), CommonModule],
  exports: [Star],
})
export class StarModule {}
