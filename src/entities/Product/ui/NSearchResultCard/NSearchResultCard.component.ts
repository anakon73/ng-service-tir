import { Component, Input } from '@angular/core'

import { NRating } from '@/entities/product'

import { ISearchItem } from '@/shared/types'

@Component({
  selector: 'NSearchResultCard',
  standalone: true,
  imports: [NRating],
  template: ` <div
    class="flex items-center justify-between rounded-2xl bg-white px-4 py-3 max-w-[504px] w-full"
  >
    <div class="flex items-center gap-3">
      <div
        class="flex items-center justify-center rounded-xl bg-indigo-100 w-20 h-16"
      >
        <img
          [src]="item.image"
          alt="result product image"
        />
      </div>
      <div>
        <h2 class="text-sm font-semibold leading-small text-gray-900">
          {{ item.name }}
        </h2>
        <div class="flex items-center gap-4">
          <p class="text-xs leading-5 text-neutral-500">Код: {{ item.id }}</p>
          <NRating
            [withQuantity]="true"
            [rating]="item.rate"
          />
        </div>
      </div>
    </div>
    <div class="text-xl font-semibold text-gray-900">
      {{ item.price }} &#8372;
    </div>
  </div>`,
})
export class NSearchResultCard {
  @Input({ required: true }) item: ISearchItem
}
