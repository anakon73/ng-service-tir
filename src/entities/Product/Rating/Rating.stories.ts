import { Meta, StoryObj } from '@storybook/angular'
import { CommonModule } from '@angular/common'

import { UILib } from '@/shared/ui'
import { moduleMetadata } from '@/shared/lib'

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
  decorators: [
    moduleMetadata({
      imports: [CommonModule, UILib],
    }),
  ],
}

export default meta

export const Default: StoryObj<Rating> = {}

export const WithoutQuantity: StoryObj<Rating> = {
  args: {
    withQuantity: false,
  },
}
