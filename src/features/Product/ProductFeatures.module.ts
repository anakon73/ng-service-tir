import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common'

import { AddToWishlist } from './AddToWishlist'

@NgModule({
  declarations: [AddToWishlist],
  imports: [
    NgIconsModule.withIcons({ heroHeart, heroHeartSolid }),
    CommonModule,
  ],
  exports: [AddToWishlist],
})
export class ProductFeaturesModule {}
