import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common'

import { ProductEntitiesModule } from '@/entities/Product'

import { AddToWishlist } from './AddToWishlist'
import { SearchResultCard } from './SearchResultCard'

@NgModule({
  declarations: [AddToWishlist, SearchResultCard],
  imports: [
    NgIconsModule.withIcons({ heroHeart, heroHeartSolid }),
    CommonModule,
    ProductEntitiesModule,
  ],
  exports: [AddToWishlist, SearchResultCard],
})
export class ProductFeaturesModule {}
