import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { heroArrowUpRight } from '@ng-icons/heroicons/outline'

import { ArticleCard } from '.'

@NgModule({
  declarations: [ArticleCard],
  imports: [NgIconsModule.withIcons({ heroArrowUpRight })],
  exports: [ArticleCard],
})
export class ArticleCardModule {}
