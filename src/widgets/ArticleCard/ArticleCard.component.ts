import { Component, Input } from '@angular/core'

import { IArticle } from '@/shared/types'

@Component({
  selector: 'ArticleCard',
  template: `
    <div class="flex h-full w-full max-w-[367px] flex-col gap-3 md:gap-7">
      <img
        [src]="article.image"
        alt="article image"
        class="max-h-[240px]"
      />
      <div class="flex w-full flex-col gap-2 md:gap-3">
        <p class="text-xs font-semibold leading-5 text-gray-400">
          {{ article.date }}
        </p>
        <div class="flex gap-4 items-start">
          <h1
            class="font-semibold leading-7 text-zinc-900 md:text-2xl md:leading-8"
          >
            {{ article.name }}
          </h1>
          <button class="pt-2">
            <ng-icon name="heroArrowUpRight"></ng-icon>
          </button>
        </div>
        <p class="text-xs leading-4 text-gray-400 md:text-base md:leading-6">
          {{ article.description }}
        </p>
      </div>
    </div>
  `,
})
export class ArticleCard {
  @Input({ required: true }) article: IArticle
}
