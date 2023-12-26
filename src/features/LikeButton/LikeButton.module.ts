import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgIconsModule } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'

import { LikeButton } from './LikeButton.component'

@NgModule({
  declarations: [LikeButton],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ heroHeart, heroHeartSolid }),
  ],
  exports: [LikeButton],
})
export class LikeButtonModule {}
