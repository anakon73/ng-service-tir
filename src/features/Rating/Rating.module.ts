import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StarModule } from '../../entities/Star/Star.module'

import { Rating } from './Rating.component'

@NgModule({
  declarations: [Rating],
  imports: [CommonModule, StarModule],
  exports: [Rating],
})
export class RatingModule {}
