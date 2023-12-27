import { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular/dist/client/decorators'
import { NgIconsModule } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'

import { AddToWishlist } from '.'

const meta: Meta<AddToWishlist> = {
  title: 'features/Product/AddToWishlist',
  component: AddToWishlist,
  decorators: [
    moduleMetadata({
      imports: [NgIconsModule.withIcons({ heroHeart, heroHeartSolid })],
      providers: [NgIconsModule],
    }),
  ],
}

export default meta

export const Default: StoryObj<AddToWishlist> = {}

export const Liked: StoryObj<AddToWishlist> = {
  args: {
    isLiked: true,
  },
}
