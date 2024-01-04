import { Component } from '@angular/core'

@Component({
  selector: 'Navbar',
  template: `
    <div class="hidden bg-gray-100 text-sm md:block">
      <ul
        class="flex select-none items-center justify-center gap-[57px] text-gray-900"
      >
        <li class="font-bold underline decoration-2 underline-offset-[22px]">
          <a
            class="py-5 px-2 transition-colors duration-300 hover:text-slate-500"
            href="/"
          >
            Головна
          </a>
        </li>
        <li
          class="flex py-5 px-2 transition-colors duration-300 hover:text-slate-400 cursor-pointer"
        >
          <p>Каталог</p>
          <p
            class="relative bottom-2 rounded-md bg-blue-100 px-1 text-[10px] font-medium text-blue-600 h-4"
            id="catalogItems"
          >
            2000
          </p>
        </li>
        <li
          class="py-5 px-2 transition-colors duration-300 hover:text-slate-400 cursor-pointer"
        >
          Послуги
        </li>
        <li
          class="py-5 px-2 transition-colors duration-300 hover:text-slate-400 cursor-pointer"
        >
          Про нас
        </li>
        <li
          class="py-5 px-2 transition-colors duration-300 hover:text-slate-400 cursor-pointer"
        >
          Контакти
        </li>
      </ul>
    </div>
  `,
})
export class Navbar {}
