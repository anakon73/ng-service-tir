import { Component, Input } from '@angular/core'

import { IAdvantage } from '@/shared/types'

@Component({
  selector: 'AdvantageCard',
  template: `
    <div
      class="card inline-flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 h-full"
    >
      <div class="p-3 rounded-lg bg-gray-100 text-lg w-[50px] h-[50px]">
        {{ advantage.image }}
      </div>
      <div>
        <h1
          class="text-sm font-bold tracking-[0.28px] md:tracking-[0.36px] text-gray-700 md:text-lg"
        >
          {{ advantage.name }}
        </h1>
        <p
          class="max-w-[230px] text-[10px] leading-4 text-neutral-500 opacity-70 md:text-xs md:leading-5"
        >
          {{ advantage.description }}
        </p>
      </div>
    </div>
  `,
})
export class AdvantageCard {
  @Input({ required: true }) advantage: IAdvantage
}
