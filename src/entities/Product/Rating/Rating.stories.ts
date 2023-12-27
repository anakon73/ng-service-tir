import { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular/dist/client/decorators'
import { CommonModule } from '@angular/common'

import { UILib } from '../../../shared/ui/UILib.module'

import { Rating } from './Rating.component'

const meta: Meta<Rating> = {
  title: 'entities/Product/Rating',
  component: Rating,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, UILib],
    }),
  ],
}

export default meta

export const Default: StoryObj<Rating> = {
  args: {
    rating: {
      quantity: 127,
      rate: 4.8,
    },
  },
}
