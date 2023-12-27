import { Component, Input } from '@angular/core'

import { IRating } from '../../../shared/types'

@Component({
  selector: 'Rating',
  template: `
    <div class="flex items-center">
      <Star [active]="rating.rate >= 0.5" />
      <Star
        class="-ml-1"
        [active]="rating.rate >= 1.5"
      />
      <Star
        class="-ml-1"
        [active]="rating.rate >= 2.5"
      />
      <Star
        class="-ml-1"
        [active]="rating.rate >= 3.5"
      />
      <Star
        class="-ml-1"
        [active]="rating.rate >= 4.5"
      />

      <p class="whitespace-nowrap text-[10px] lg:text-xs font-montserrat">
        <span class="font-medium leading-5 text-blue-600">{{
          rating.rate
        }}</span>
        ({{ rating.quantity }}
        відгуків)
      </p>
    </div>
  `,
})
export class Rating {
  @Input({ required: true }) rating: IRating
}
