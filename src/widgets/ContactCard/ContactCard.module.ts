import { NgModule } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { heroMap } from '@ng-icons/heroicons/outline'

import { UILib } from '@/shared/ui'

import { ContactCard } from '.'

@NgModule({
  declarations: [ContactCard],
  imports: [NgIconsModule.withIcons({ heroMap }), UILib],
  exports: [ContactCard],
})
export class ContactCardModule {}
