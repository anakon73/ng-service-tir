import { NgModule } from '@angular/core'

import { ProductEntitiesModule } from '@/entities/Product'

import { ReviewCard } from '.'

@NgModule({
  declarations: [ReviewCard],
  imports: [ProductEntitiesModule],
  exports: [ReviewCard],
})
export class ReviewCardModule {}
