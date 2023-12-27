import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LikeButtonModule } from '../../features/LikeButton/LikeButton.module'
import { RatingModule } from '../../features/Rating/Rating.module'

import { StarModule } from '../../entities/Star/Star.module'

import { ProductCard } from './ProductCard.component'
import { UILib } from '../../shared/ui/UILib.module'

@NgModule({
  declarations: [ProductCard],
  imports: [LikeButtonModule, StarModule, CommonModule, RatingModule, UILib],
  exports: [ProductCard],
})
export class ProductCardModule {}
