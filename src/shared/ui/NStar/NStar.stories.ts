import { Meta, StoryObj } from '@storybook/angular'
import { NgIconsModule } from '@ng-icons/core'
import { heroStarSolid } from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common'

import { moduleMetadata } from '@/shared/lib'

import { NStar } from '.'

const meta: Meta<NStar> = {
  title: 'shared/UI/NStar',
  component: NStar,
  decorators: [
    moduleMetadata({
      imports: [NgIconsModule.withIcons({ heroStarSolid }), CommonModule],
    }),
  ],
}

export default meta

export const Active: StoryObj<NStar> = {
  args: {
    active: true,
  },
}

export const NotActive: StoryObj<NStar> = {
  args: {
    active: false,
  },
}
