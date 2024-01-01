import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IRating } from '@/shared/types'
import { NStar } from '@/shared/ui/NStar'

@Component({
  selector: 'NRating',
  standalone: true,
  imports: [CommonModule, NStar],
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

      <p
        *ngIf="withQuantity"
        class="whitespace-nowrap text-[10px] lg:text-xs"
      >
        <span class="font-medium leading-5 text-blue-600">{{
          rating.rate
        }}</span>
        ({{ rating.quantity }}
        відгуків)
      </p>
    </div>
  `,
})
export class NRating {
  @Input({ required: true }) rating: IRating
  @Input() withQuantity: boolean
}
