import { Component, Input } from '@angular/core'

import { IService } from '@/shared/types'

@Component({
  selector: 'ServiceCard',
  template: `
    <div
      class="card flex flex-col rounded-2xl py-3 pl-3 pr-1.5 max-w-[560px] lg:flex-row gap-4 h-full"
    >
      <img
        class="max-h-80 rounded-2xl"
        [src]="service.image"
        alt="service icon"
      />
      <div class="flex flex-col gap-2">
        <h1 class="text-lg font-bold leading-6 text-gray-900">
          {{ service.name }}
        </h1>
        <p class="text-xs leading-5 text-neutral-500 opacity-70">
          {{ service.description }}
        </p>
        <NButton
          size="md"
          variant="primary"
        >
          Детальніше
        </NButton>
      </div>
    </div>
  `,
})
export class ServiceCard {
  @Input({ required: true }) service: IService
}
