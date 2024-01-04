import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline'
import { FormsModule } from '@angular/forms'

import { NSearchResultCard } from '@/entities/product'

import { ISearchItem } from '@/shared/types'

@Component({
  selector: 'Search',
  imports: [CommonModule, NSearchResultCard, FormsModule, NgIconComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],
  standalone: true,
  template: ` <div
      *ngIf="!isMobile"
      class="relative z-20 w-full max-w-lg"
    >
      <div
        class="relative z-10 flex w-full max-w-lg items-end gap-6 rounded-3xl bg-white"
      >
        <button
          class="rounded-[20px] bg-gray-100 p-3 w-12 h-12 transition-colors duration-300 hover:bg-gray-200"
        >
          <ng-icon
            name="heroMagnifyingGlass"
            class="text-slate-700"
            [style]="{ '--ng-icon__size': '24px !important' }"
          ></ng-icon>
        </button>
        <input
          class="w-[75%] border-x-0 border-b border-t-0 border-gray-100 p-0 pb-2 text-xs font-medium leading-7 text-gray-900 placeholder:text-slate-500 focus:ring-0"
          type="text"
          placeholder="Напишіть назву товару"
          [(ngModel)]="searchValue"
        />
      </div>
      <div
        *ngIf="searchValue"
        class="absolute top-[54px] z-10 w-full flex flex-col gap-1 rounded-2xl bg-white shadow-2xl"
      >
        <NSearchResultCard [item]="item" />
        <hr />
        <NSearchResultCard [item]="item" />
        <hr />
        <NSearchResultCard [item]="item" />
        <hr />
        <NSearchResultCard [item]="item" />
        <hr />
        <div
          class="px-2 py-3 text-sm font-semibold leading-small text-blue-600 transition-colors duration-300 hover:text-blue-800"
        >
          Показати всі (239)
        </div>
      </div>
      <div
        *ngIf="searchValue"
        class="fixed inset-0 h-full w-full border border-black/10 bg-black/25 blur-sm"
      ></div>
    </div>
    <div
      *ngIf="isMobile"
      class="relative z-20 w-full"
    >
      <div class="flex items-end w-full relative gap-6 z-10 rounded-3xl">
        <button
          class="p-2 bg-gray-100 rounded-[14px] w-[34px] h-[34px] transition-colors duration-300 hover:bg-gray-200"
        >
          <ng-icon
            name="heroMagnifyingGlass"
            class="text-slate-700"
            [style]="{ '--ng-icon__size': '17px !important' }"
          ></ng-icon>
        </button>
        <input
          class="bg-blue-600 border-b focus:border-white border-x-0 border-t-0 p-0 pb-2 border-zinc-50 font-medium text-xs leading-7 placeholder:text-white/50 text-white focus:ring-0 w-[75%]"
          type="text"
          placeholder="Напишіть назву товару"
        />
      </div>
    </div>`,
})
export class Search {
  @Input() isMobile: boolean
  searchValue: string

  item: ISearchItem = {
    id: 6422889,
    image:
      'https://w7.pngwing.com/pngs/176/591/png-transparent-car-gasoline-plastic-jerrycan-fuel-red-plastic-petrol-tank-photography-plastic-bottle-metal.png',
    name: 'Паливний бак Scania',
    price: 2200,
    rate: {
      quantity: 127,
      rate: 4.8,
    },
  }
}
