import { Meta, StoryObj } from '@storybook/angular'

import { AddToWishlist } from '.'

const meta: Meta<AddToWishlist> = {
  title: 'features/Product/AddToWishlist',
  component: AddToWishlist,
}

export default meta

export const Default: StoryObj<AddToWishlist> = {}

export const Liked: StoryObj<AddToWishlist> = {
  args: {
    isLiked: true,
  },
}
