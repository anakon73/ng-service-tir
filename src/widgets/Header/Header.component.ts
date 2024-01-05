import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  heroUser,
  heroHeart,
  heroShoppingCart,
  heroBars3,
  heroXMark,
} from '@ng-icons/heroicons/outline'

import { Search } from '@/features/product/search'

@Component({
  selector: 'Header',
  standalone: true,
  styles: `
    ng-icon {
    --ng-icon__size: 20px !important;
    }
  `,
  imports: [Search, CommonModule, NgIconComponent],
  viewProviders: [
    provideIcons({
      heroUser,
      heroHeart,
      heroShoppingCart,
      heroBars3,
      heroXMark,
    }),
  ],
  template: `
    <div>
      <div
        [ngClass]="{
          'opacity-0 -translate-y-full': !isShowDropdown
        }"
        class="flex fixed top-0 flex-col bg-blue-600 gap-6 text-white z-50 py-7 px-8 transition-all duration-300 ease-in md:hidden w-full h-full overflow-y-auto"
      >
        <div class="flex items-center justify-between">
          <img
            src="/src/shared/assets/images/logo.svg"
            alt="service tir logo"
            class="max-w-none"
          />
          <button (click)="isShowDropdown = false">
            <ng-icon name="heroXMark"></ng-icon>
          </button>
        </div>
        <ul
          class="flex flex-col gap-5 hover:text-zinc-200 transition-colors duration-300"
        >
          <li>Головна</li>
          <li>Каталог</li>
          <li>Послуги</li>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Відгуки</li>
          <li>Статті</li>
        </ul>
        <hr class="border-[0.5px] border-zinc-50/50" />
        <button
          class="flex items-center gap-2 group"
          *ngIf="!logged"
        >
          <ng-icon
            name="heroUser"
            class="text-white group-hover:text-zinc-200"
          ></ng-icon>
          <p class="group-hover:text-zinc-200 transition-colors duration-300">
            Особистий кабінет
          </p>
        </button>
        <div
          class="flex items-center gap-2"
          *ngIf="logged"
        >
          <ng-icon
            name="heroUser"
            class="text-white group-hover:text-zinc-200"
          ></ng-icon>
          <div class="text-xs font-medium">
            <p class="transition-colors duration-300 hover:text-zinc-200">
              Олександр
            </p>
            <p
              class="text-white transition-colors duration-300 hover:text-zinc-200"
            >
              Вийти
            </p>
          </div>
        </div>
        <button class="flex items-center gap-2 group">
          <div class="relative">
            <ng-icon
              name="heroHeart"
              class="text-white group-hover:text-zinc-200"
            ></ng-icon>
            <div
              id="favorite"
              class="absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center justify-center rounded-full border border-white bg-cyan-100 px-0.5 text-center text-[8px] text-sky-500"
            >
              0
            </div>
          </div>
          <p class="group-hover:text-zinc-200 transition-colors duration-300">
            Обране
          </p>
        </button>
        <div class="group">
          <div
            class="flex items-center gap-2 group-hover:text-zinc-200 transition-colors duration-300"
          >
            <div class="relative">
              <ng-icon
                name="heroShoppingCart"
                class="text-white group-hover:text-zinc-200"
              ></ng-icon>
              <div
                class="absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center justify-center rounded-full border border-white bg-green-100 px-0.5 text-center text-[8px] text-emerald-500"
              >
                6
              </div>
            </div>
            <div class="flex gap-2">
              <p>&#8372;10 000</p>
              <p>Кошик</p>
            </div>
          </div>
        </div>
        <Search [isMobile]="true"></Search>
      </div>
      <header class="relative z-20 py-7 text-sm text-gray-900 md:py-5">
        <div
          class="mx-auto hidden items-center justify-between gap-2 px-8 md:flex xl:max-w-[1440px] xl:px-36"
        >
          <img
            src="/src/shared/assets/images/logo.svg"
            alt="service tir logo"
            class="max-w-none"
          />
          <div class="max-w-lg w-full">
            <Search></Search>
          </div>
          <div class="flex h-5 gap-8">
            <ng-icon
              *ngIf="!logged"
              name="heroUser"
              class="text-gray-900 hover:text-gray-950 w-5 h-5"
            ></ng-icon>
            <div
              class="flex items-center gap-1"
              *ngIf="logged"
            >
              <ng-icon
                name="heroUser"
                class="text-gray-900 hover:text-gray-950 w-5 h-5"
              ></ng-icon>
              <div class="text-xs font-medium">
                <p class="transition-colors duration-300">Олександр</p>
                <a href="/">
                  <p
                    class="text-blue-600 transition-colors duration-300 hover:text-blue-800"
                  >
                    Вийти
                  </p>
                </a>
              </div>
            </div>
            <button class="relative">
              <ng-icon
                name="heroHeart"
                class="text-gray-900 hover:text-gray-950 w-5 h-5"
              ></ng-icon>
              <div
                id="favorite"
                class="absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center justify-center rounded-full border border-white bg-cyan-100 px-0.5 text-center text-[8px] text-sky-500"
              >
                0
              </div>
            </button>
            <button class="flex items-center gap-2">
              <div class="relative">
                <ng-icon
                  name="heroShoppingCart"
                  class="text-gray-900 hover:text-gray-950 w-5 h-5"
                ></ng-icon>
                <div
                  class="absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center justify-center rounded-full border border-white bg-green-100 px-0.5 text-center text-[8px] text-emerald-500"
                >
                  6
                </div>
              </div>
              <div class="max-w-[80px] truncate">
                &#8372; <span id="cartCost">10000</span>
              </div>
            </button>
          </div>
        </div>
        <div class="px-5 md:hidden">
          <div class="flex items-center justify-between">
            <img
              src="/src/shared/assets/images/logo.svg"
              alt="service tir logo"
              class="max-w-none"
            />
            <button
              (click)="isShowDropdown = true"
              class="w-6 h-4"
            >
              <ng-icon
                name="heroBars3"
                class="text-gay-900 hover:text-gray-950"
              ></ng-icon>
            </button>
          </div>
        </div>
      </header>
    </div>
  `,
})
export class Header {
  @Input() logged: boolean

  isShowDropdown = false
}
