import { Component, Input } from '@angular/core'

import { IProduct } from '@/shared/types'

@Component({
  selector: 'ProductCard',
  template: `<div
    class="card relative h-full inline-flex flex-col justify-between rounded-2xl px-3 pb-6 pt-3 text-gray-900 lg:max-w-none"
  >
    <div>
      <div
        class="relative mb-3 flex h-[130px] items-center justify-center rounded-2xl bg-indigo-100 lg:h-[188px] lg:max-w-none w-auto"
      >
        <button class="absolute right-2 top-2">
          <LikeButton
            [isLiked]="isLiked"
            (onLike)="isLiked = $event"
          />
        </button>
        <img
          class="object-cover max-h-[130px] lg:max-h-[188px]"
          [src]="product.image"
          alt="product image"
        />
      </div>
      <h1 class="mb-2 text-sm font-bold leading-7 lg:text-lg">
        {{ product.name }}
      </h1>
      <div class="mb-2 flex flex-wrap items-center">
        <Rating [rating]="product.rate" />
      </div>
      <div
        class="mb-4 min-[400px]:max-w-[244px] text-[10px] leading-4 text-neutral-500 opacity-70 lg:text-xs lg:leading-5"
      >
        {{ product.description }}
      </div>
    </div>
    <div class="lg:items-end gap-3 justify-between flex lg:flex-row flex-col">
      <div
        class="max-w-[122px]"
        *ngIf="product.discount"
      >
        <div class="mb-1 flex gap-2">
          <p
            class="whitespace-nowrap text-[10px] font-bold leading-5 text-gray-400 line-through opacity-50 lg:text-xs"
          >
            {{ product.price }} ₴
          </p>
        </div>
        <div class="text-xl font-bold leading-none lg:text-2xl">
          {{ product.priceWithDiscount }} ₴
        </div>
      </div>
      <div
        *ngIf="!product.discount"
        class="text-xl font-bold leading-none lg:text-2xl"
      >
        {{ product.price }} ₴
      </div>
      <NButton
        variant="primary"
        size="md"
      >
        В кошик
      </NButton>
    </div>
  </div>`,
})
export class ProductCard {
  isLiked = false

  @Input({ required: true }) product: IProduct
}
