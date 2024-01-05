import { Component } from '@angular/core'

@Component({
  selector: 'NFooter',
  standalone: true,
  template: ` <div class="bg-gray-100 py-6 relative z-40">
    <div
      class="mx-auto max-w-[1440px] justify-between px-5 xl:flex 2xl:px-[150px]"
    >
      <button>
        <img
          src="/src/shared/assets/images/logo.svg"
          alt="service tir logo"
        />
      </button>
      <ul
        class="mt-8 flex select-none flex-wrap items-center gap-9 text-gray-900 lg:gap-[53px] xl:mt-0 xl:justify-center"
      >
        <li
          class="font-bold transition-colors duration-300 hover:text-gray-950 cursor-pointer"
        >
          Головна
        </li>
        <li class="flex cursor-pointer">
          <p class="transition-colors duration-300 hover:text-gray-950">
            Каталог
          </p>
          <p
            class="relative -top-1.5 rounded-md bg-blue-100 px-1 h-4 text-[10px] font-medium text-blue-600"
            id="catalogItemsFooter"
          >
            2000
          </p>
        </li>
        <li
          class="transition-colors duration-300 hover:text-gray-950 cursor-pointer"
        >
          Послуги
        </li>
        <li
          class="transition-colors duration-300 hover:text-gray-950 cursor-pointer"
        >
          Про нас
        </li>
        <li
          class="transition-colors duration-300 hover:text-gray-950 cursor-pointer"
        >
          Контакти
        </li>
        <li
          class="transition-colors duration-300 hover:text-gray-950 cursor-pointer"
        >
          Відгуки
        </li>
        <li
          class="transition-colors duration-300 hover:text-gray-950 cursor-pointer"
        >
          Статті
        </li>
      </ul>
    </div>
  </div>`,
})
export class NFooter {}
