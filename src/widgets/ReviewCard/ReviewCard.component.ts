import { Component, Input } from '@angular/core'

import { Rating } from '@/entities/Product/Rating'

import { IReview } from '@/shared/types'

@Component({
  selector: 'ReviewCard',
  standalone: true,
  imports: [Rating],
  template: `
    <div
      class="card flex flex-col gap-2 rounded-[10px] bg-white p-4 min-[425px]:min-w-[387px] lg:max-w-[560px] lg:gap-1 lg:p-6 h-full"
    >
      <h1 class="font-bold uppercase text-gray-800 lg:text-xl">
        {{ review.author }}
      </h1>
      <div class="block items-center gap-2 min-[425px]:flex lg:gap-3">
        <p
          class="whitespace-nowrap text-xs font-medium leading-[30px] text-gray-800 lg:text-sm"
        >
          Відгук про товар:
        </p>
        <div class="flex items-center gap-1">
          <p
            class="whitespace-nowrap text-xs font-semibold leading-[30px] text-blue-600 lg:text-sm"
          >
            {{ review.productName }}
          </p>
          <Rating
            [rating]="review.rate"
            [withQuantity]="false"
          />
        </div>
      </div>
      <p class="text-[10px] leading-small text-neutral-500 lg:text-xs">
        {{ review.comment }}
      </p>
    </div>
  `,
})
export class ReviewCard {
  @Input({ required: true }) review: IReview
}
