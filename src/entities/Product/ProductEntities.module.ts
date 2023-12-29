import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UILib } from '@/shared/ui'

import { Rating } from './Rating'

@NgModule({
  declarations: [Rating],
  imports: [CommonModule, UILib],
  exports: [Rating],
})
export class ProductEntitiesModule {}
