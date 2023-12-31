import { Meta, StoryObj } from '@storybook/angular'

import { Rating } from '.'

const meta: Meta<Rating> = {
  title: 'entities/Product/Rating',
  component: Rating,
  argTypes: {
    withQuantity: { type: 'boolean' },
  },
  args: {
    withQuantity: true,
    rating: {
      quantity: 127,
      rate: 4.8,
    },
  },
}

export default meta

export const Default: StoryObj<Rating> = {}

export const WithoutQuantity: StoryObj<Rating> = {
  args: {
    withQuantity: false,
  },
}
