import { Meta, StoryObj } from '@storybook/angular'

import { NRating } from '.'

const meta: Meta<NRating> = {
  title: 'entities/Product/NRating',
  component: NRating,
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

export const Default: StoryObj<NRating> = {}

export const WithoutQuantity: StoryObj<NRating> = {
  args: {
    withQuantity: false,
  },
}
