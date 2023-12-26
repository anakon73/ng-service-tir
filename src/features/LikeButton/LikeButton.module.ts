import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgIconsModule } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'

import { LikeButton } from './LikeButton.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [LikeButton],
  imports: [
    NgIconsModule.withIcons({ heroHeart, heroHeartSolid }),
    CommonModule,
  ],
  exports: [LikeButton],
})
export class LikeButtonModule {}
