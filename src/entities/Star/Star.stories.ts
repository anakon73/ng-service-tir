import { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular/dist/client/decorators'
import { NgIconsModule } from '@ng-icons/core'
import { heroStarSolid } from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common'

import { Star } from './Star.component'

const meta: Meta<Star> = {
  title: 'entities/Star',
  component: Star,
  decorators: [
    moduleMetadata({
      imports: [NgIconsModule.withIcons({ heroStarSolid }), CommonModule],
    }),
  ],
}

export default meta

export const Active: StoryObj<Star> = {
  args: {
    active: true,
  },
}

export const NotActive: StoryObj<Star> = {
  args: {
    active: false,
  },
}
