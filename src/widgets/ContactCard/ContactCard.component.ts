import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroMap } from '@ng-icons/heroicons/outline'

import { NButton } from '@/shared/ui/NButton'

@Component({
  selector: 'ContactCard',
  standalone: true,
  imports: [NgIconComponent, NButton],
  viewProviders: [provideIcons({ heroMap })],
  template: `
    <div
      class="contactCard py-8 pl-8 min-[425px]:pr-16 pr-8 rounded-2xl inline-block bg-white"
    >
      <div class="flex gap-3 mb-9 items-center">
        <div
          class="p-2 bg-white paragraphIcon rounded-full hidden min-[425px]:block w-10 h-10 text-lg"
        >
          📱
        </div>
        <h1
          class="text-gray-900 font-jakarta font-bold text-3xl lg:text-big lg:leading-extra-height leading-normal whitespace-nowrap"
        >
          Наші контакти
        </h1>
      </div>
      <div class="gap-5 flex flex-col items-start text-neutral-500 mb-4">
        <div class="flex flex-col gap-2.5">
          <div class="font-bold">Адреса:</div>
          <div class="leading-7">Україна, м. Львів, вул. Пасічна 127</div>
        </div>
        <div
          class="flex flex-col gap-2.5 transition-colors duration-300 hover:text-zinc-900"
        >
          <div class="font-bold">Телефон</div>
          <div class="leading-7 cursor-pointer">+38(098)-0000-122</div>
          <div class="leading-7 cursor-pointer">+38(096)-0000-127</div>
          <div class="leading-7 cursor-pointer">+38(098)-0000-127</div>
        </div>
        <div
          class="flex flex-col gap-2.5 transition-colors duration-300 hover:text-zinc-900"
        >
          <div class="font-bold">Пошта:</div>
          <div class="leading-7 underline underline-offset-2 cursor-pointer">
            {{ 'avtobaza12@ukr.net' }}
          </div>
        </div>
        <NButton
          variant="primary"
          size="md"
        >
          Зателефонувати
        </NButton>
      </div>
      <button class="flex gap-2.5 items-center pl-3">
        <ng-icon
          class="text-blue-600"
          name="heroMap"
        ></ng-icon>
        <p class="text-xs font-medium text-blue-600">Прокласти маршрут</p>
      </button>
    </div>
  `,
})
export class ContactCard {}
