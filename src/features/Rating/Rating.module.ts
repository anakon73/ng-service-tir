import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UILib } from '../../shared/ui/UILib.module'

import { Rating } from './Rating.component'

@NgModule({
  declarations: [Rating],
  imports: [CommonModule, UILib],
  exports: [Rating],
})
export class RatingModule {}
