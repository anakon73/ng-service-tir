import { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular/dist/client/decorators'
import { NgIconsModule } from '@ng-icons/core'
import { heroHeart } from '@ng-icons/heroicons/outline'
import { heroHeartSolid } from '@ng-icons/heroicons/solid'

import { LikeButton } from './LikeButton.component'

const meta: Meta<LikeButton> = {
  title: 'features/LikeButton',
  component: LikeButton,
  decorators: [
    moduleMetadata({
      imports: [NgIconsModule.withIcons({ heroHeart, heroHeartSolid })],
      providers: [NgIconsModule],
    }),
  ],
}

export default meta

export const Default: StoryObj<LikeButton> = {}

export const Liked: StoryObj<LikeButton> = {
  args: {
    isLiked: true,
  },
}
