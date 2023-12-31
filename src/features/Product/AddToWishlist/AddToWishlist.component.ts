import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'

@Component({
  selector: 'AddToWishlist',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroHeart, heroHeartSolid })],
  template: `
    <button (click)="onClick()">
      <div
        class="!w-6 !h-6 p-0.5 rounded-full transition-colors duration-300"
        [ngClass]="{
          'text-white bg-blue-600 hover:text-zinc-100 hover:bg-blue-700':
            isLiked,
          'text-blue-600 bg-white hover:text-blue-700 hover:bg-zinc-100':
            !isLiked
        }"
      >
        <ng-icon
          class="!w-4 !h-4"
          [name]="isLiked ? 'heroHeartSolid' : 'heroHeart'"
        ></ng-icon>
      </div>
    </button>
  `,
})
export class AddToWishlist {
  @Input({ required: true }) isLiked: boolean

  @Output() onLike = new EventEmitter<boolean>()

  onClick() {
    this.onLike.emit(this.isLiked ? false : true)
  }
}
