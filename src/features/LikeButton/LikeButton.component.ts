import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'LikeButton',
  template: `
    <button (click)="onClick()">
      <div
        *ngIf="isLiked"
        class="text-white bg-blue-600 !w-6 !h-6 p-0.5 rounded-full"
      >
        <ng-icon
          class="!w-4 !h-4"
          name="heroHeartSolid"
        ></ng-icon>
      </div>
      <div
        *ngIf="!isLiked"
        class="text-blue-600 bg-white !w-6 !h-6 p-0.5 rounded-full"
      >
        <ng-icon
          class="!w-4 !h-4"
          name="heroHeart"
        ></ng-icon>
      </div>
    </button>
  `,
})
export class LikeButton {
  @Input({ required: true }) isLiked: boolean

  @Output() onLike = new EventEmitter<boolean>()

  onClick() {
    this.onLike.emit(this.isLiked ? false : true)
  }
}
